import { useEffect, useId, useRef, useState } from 'react'
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi'
import { GREETING, QUICK_PROMPTS, answerQuestion } from '../../utils/assistant'

const MAX_LENGTH = 500

function nextId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

function Suggestions({ prompts, onPick }) {
  if (!prompts?.length) return null
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {prompts.map((prompt) => (
        <li key={prompt}>
          <button
            type="button"
            className="rounded-full border border-line bg-paper px-3 py-1.5 text-left text-xs text-ink transition duration-200 hover:border-sage hover:bg-hover"
            onClick={() => onPick(prompt)}
          >
            {prompt}
          </button>
        </li>
      ))}
    </ul>
  )
}

function MessageList({ messages, onPick, onRetry, scrollerRef, onScroll }) {
  return (
    <div ref={scrollerRef} onScroll={onScroll} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
      {messages.map((message, index) => {
        const isUser = message.role === 'user'
        const isLast = index === messages.length - 1
        return (
          <div key={message.id} className={isUser ? 'flex justify-end' : 'flex justify-start'}>
            <div className={isUser ? 'max-w-[85%]' : 'max-w-[92%]'}>
              <p
                className={`whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  isUser ? 'bg-[#e7f2f8] text-ink' : 'border border-line bg-paper text-ink'
                }`}
              >
                {message.text}
              </p>
              {message.error && (
                <button type="button" className="btn-quiet mt-2 text-xs" onClick={() => onRetry(message.retry)}>
                  Try again
                </button>
              )}
              {!isUser && isLast && <Suggestions prompts={message.suggestions} onPick={onPick} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function ChatWidget() {
  const titleId = useId()
  const launcherRef = useRef(null)
  const inputRef = useRef(null)
  const scrollerRef = useRef(null)
  const stickToEnd = useRef(true)
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [hint, setHint] = useState('')
  const [messages, setMessages] = useState(() => [
    { id: 'greeting', role: 'assistant', text: GREETING, suggestions: QUICK_PROMPTS },
  ])

  useEffect(() => {
    if (!open) return undefined
    inputRef.current?.focus()
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        launcherRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!open || !scroller || !stickToEnd.current) return
    scroller.scrollTop = scroller.scrollHeight
  }, [messages, open])

  useEffect(() => {
    if (messages.length > 1) setHint('')
  }, [messages])

  function onScroll() {
    const scroller = scrollerRef.current
    if (!scroller) return
    stickToEnd.current = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight < 48
  }

  function closePanel() {
    setOpen(false)
    launcherRef.current?.focus()
  }

  function send(raw) {
    const text = raw.trim()
    if (!text) {
      setHint('Write a message first.')
      inputRef.current?.focus()
      return
    }
    if (text.length > MAX_LENGTH) {
      setHint('Please keep the message under 500 characters.')
      return
    }
    setHint('')
    setDraft('')
    stickToEnd.current = true
    setMessages((current) => [...current, { id: nextId(), role: 'user', text }])
    try {
      const result = answerQuestion(text)
      setMessages((current) => [
        ...current,
        { id: nextId(), role: 'assistant', text: result.text, suggestions: result.suggestions },
      ])
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: nextId(),
          role: 'assistant',
          text: 'Something went wrong while looking that up.',
          error: true,
          retry: text,
        },
      ])
    }
  }

  function onKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault()
      send(draft)
    }
  }

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 flex flex-col items-end gap-3">
      {open && (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby={titleId}
          className="flex h-[min(32rem,calc(100dvh-7.5rem))] w-[min(22.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[24px] border border-line bg-card shadow-card"
        >
          <header className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
            <div>
              <h2 id={titleId} className="text-sm font-semibold text-ink">
                Portfolio assistant
              </h2>
              <p className="mt-0.5 text-xs text-ink-muted">Answers from this site, not a live model</p>
            </div>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink hover:bg-hover"
              aria-label="Close portfolio assistant"
              onClick={closePanel}
            >
              <FiX aria-hidden="true" />
            </button>
          </header>
          <MessageList
            messages={messages}
            onPick={send}
            onRetry={send}
            scrollerRef={scrollerRef}
            onScroll={onScroll}
          />
          <form
            className="border-t border-line p-3"
            onSubmit={(event) => {
              event.preventDefault()
              send(draft)
            }}
          >
            <label htmlFor="portfolio-chat-input" className="sr-only">
              Message the portfolio assistant
            </label>
            <div className="flex items-end gap-2">
              <textarea
                id="portfolio-chat-input"
                ref={inputRef}
                rows={1}
                value={draft}
                maxLength={MAX_LENGTH}
                placeholder="Ask about Abhay’s work"
                className="max-h-24 min-h-[44px] flex-1 resize-none rounded-2xl border border-line bg-paper px-3 py-2.5 text-sm text-ink placeholder:text-ink-muted"
                onChange={(event) => {
                  setDraft(event.target.value)
                  if (hint) setHint('')
                }}
                onKeyDown={onKeyDown}
              />
              <button type="submit" className="btn-primary h-11 w-11 shrink-0 !px-0" aria-label="Send message">
                <FiSend aria-hidden="true" />
              </button>
            </div>
            {hint && (
              <p className="mt-2 text-xs text-blue-link" role="status">
                {hint}
              </p>
            )}
          </form>
        </section>
      )}

      <button
        ref={launcherRef}
        type="button"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-pastel text-ink shadow-card transition duration-200 hover:scale-105 hover:bg-[#7aadc8]"
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
        aria-label={open ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        onClick={() => (open ? closePanel() : setOpen(true))}
      >
        {!open && <span className="chat-pulse pointer-events-none absolute inset-0 rounded-full bg-sage" aria-hidden="true" />}
        {open ? <FiX aria-hidden="true" className="relative text-lg" /> : <FiMessageCircle aria-hidden="true" className="relative text-xl" />}
        {!open && (
          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-ink opacity-0 shadow-card transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
            Ask about my work
          </span>
        )}
      </button>
    </div>
  )
}
