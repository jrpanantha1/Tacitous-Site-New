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

const REVEAL = [
  '.section-head', '.card', '.process > li', '.benefit-list > li', '.circle > li', '.forms-grid > li', '.link-panel > a',
  '.shot', '.compare > div', '.capability-list > li', '.journey', '.journey-head', '.faq details', '.cta-band', '.equation',
  '.band', '.story-step', '.network', '.explorer', '.trust-row > span', '.chips', '.row-head',
].join(',');

// Gives every page a staggered entrance as its sections scroll into view. Only content below the fold at load is
// animated, so nothing visible ever flickers, and the effect is skipped entirely for reduced motion.
export function useScrollReveal(key: string) {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const fold = window.innerHeight;
    const els = Array.from(document.querySelectorAll<HTMLElement>(`main :is(${REVEAL})`)).filter(
      (el) => !el.closest('.hero') && !el.parentElement?.closest('.sr') && el.getBoundingClientRect().top > fold,
    );
    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          io.unobserve(el);
          el.classList.add('sr-in');
          const delay = parseInt(el.style.getPropertyValue('--sr-delay')) || 0;
          timers.push(window.setTimeout(() => { el.classList.remove('sr', 'sr-in'); el.style.removeProperty('--sr-delay'); }, delay + 900));
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    for (const el of els) {
      const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.matches(REVEAL)) : [];
      el.style.setProperty('--sr-delay', `${Math.min(siblings.indexOf(el), 5) * 90}ms`);
      el.classList.add('sr');
      io.observe(el);
    }
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      for (const el of els) { el.classList.remove('sr', 'sr-in'); el.style.removeProperty('--sr-delay'); }
    };
  }, [key]);
}

// Tilts an element slightly towards the pointer, on devices with a precise pointer only.
function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 5}deg`);
      el.style.setProperty('--rx', `${((e.clientY - r.top) / r.height - 0.5) * -5}deg`);
    };
    const leave = () => { el.style.removeProperty('--rx'); el.style.removeProperty('--ry'); };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); };
  }, []);
  return ref;
}

// A real application screenshot in a browser frame that can be opened full size in an accessible dialog.
export function Screenshot({ screen, caption, eager = false }: { screen: Screen; caption?: string; eager?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const tilt = useTilt<HTMLButtonElement>();

  return (
    <figure className="shot">
      <button ref={tilt} type="button" className="shot-open" onClick={() => dialog.current?.showModal()} aria-label={`Expand screenshot: ${screen.alt}`}>
        <span className="shot-bar" aria-hidden="true"><i /><i /><i /></span>
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
