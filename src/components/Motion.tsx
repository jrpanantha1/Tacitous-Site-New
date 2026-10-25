import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Expand, X } from 'lucide-react';
import type { Screen } from '../content/features';

export const screenSrc = (file: string) => `${import.meta.env.BASE_URL}screens/${file}`;

// Animates content in as it first scrolls into view. Content is never hidden: it renders visible without
// JavaScript, anything already on screen at load is left alone, and reduced motion turns the animation off in CSS.
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: {
  children: ReactNode;
  as?: 'div' | 'section' | 'li' | 'article';
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    let first = true;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!first) setAnimate(true);
        io.disconnect();
      }
      first = false;
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`${animate ? 'reveal-in' : ''}${className ? ` ${className}` : ''}`.trim() || undefined}
      style={delay && animate ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

// A real application screenshot that can be opened full size in an accessible dialog.
export function Screenshot({ screen, caption, eager = false }: { screen: Screen; caption?: string; eager?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <figure className="shot">
      <button type="button" className="shot-open" onClick={() => dialog.current?.showModal()} aria-label={`Expand screenshot: ${screen.alt}`}>
        <img
          src={screenSrc(screen.file)}
          alt={screen.alt}
          width={screen.w}
          height={screen.h}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
        <span className="shot-hint" aria-hidden="true"><Expand size={16} /> Expand</span>
      </button>
      {caption && <figcaption>{caption}</figcaption>}
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={screen.alt}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
      >
        <button type="button" className="lightbox-close" onClick={() => dialog.current?.close()} aria-label="Close">
          <X size={22} />
        </button>
        <img src={screenSrc(screen.file)} alt={screen.alt} width={screen.w} height={screen.h} loading="lazy" decoding="async" />
      </dialog>
    </figure>
  );
}
