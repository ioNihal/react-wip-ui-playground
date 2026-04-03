export const fadeUpClass =
  "[animation:fade-up_0.5s_cubic-bezier(0.16,1,0.3,1)_both]";

export const highlightClass =
  "[animation:highlight-pulse_2.2s_ease-in-out_infinite]";

export function delayClass(step: number) {
  const delays = [
    "[animation-delay:0ms]",
    "[animation-delay:80ms]",
    "[animation-delay:160ms]",
    "[animation-delay:240ms]",
    "[animation-delay:320ms]",
    "[animation-delay:400ms]",
  ];

  return delays[Math.max(0, Math.min(step, delays.length - 1))];
}

export const buttonBaseClass =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sm)] border-2 border-transparent px-[22px] py-[10px] text-sm font-semibold leading-none tracking-[0.01em] transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] disabled:cursor-not-allowed disabled:opacity-50";

export const buttonSmClass =
  "rounded-[var(--radius-sm)] px-[14px] py-[6px] text-[0.8rem]";

export const buttonPrimaryClass =
  "border-[var(--accent)] bg-[var(--accent)] text-white shadow-[0_2px_8px_rgba(110,139,82,0.30)] hover:-translate-y-px hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)] hover:shadow-[0_4px_16px_rgba(110,139,82,0.35)] active:translate-y-0";

export const buttonGhostClass =
  "border-transparent bg-transparent text-[var(--text-muted)] hover:bg-[var(--bg-muted)] hover:text-[var(--text-primary)]";

export const previewAreaClass =
  "relative flex min-h-[130px] flex-wrap items-center justify-center gap-4 overflow-hidden rounded-[var(--radius-md)] border border-[var(--border)] bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] [background-size:24px_24px] px-[clamp(14px,3vw,20px)] py-[clamp(20px,3vw,28px)] [&>*]:max-w-full max-[640px]:px-[14px] max-[640px]:py-5";

export const mockCardClass =
  "w-[200px] max-w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-white p-[18px] shadow-[var(--shadow-xs)]";

export const mockLabelClass =
  "mb-1 block text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[var(--text-subtle)]";

export const mockInputClass =
  "mb-2 w-full rounded-[var(--radius-xs)] border border-[var(--border)] bg-[var(--bg-surface)] px-[11px] py-[7px] font-sans text-[0.82rem] outline-none";

export const codePanelClass =
  "rounded-[var(--radius-md)] border border-[var(--border-dark)] bg-[var(--bg-dark)] px-4 py-3 font-mono text-[0.78rem] leading-[1.8] text-[#C8D9B4]";
