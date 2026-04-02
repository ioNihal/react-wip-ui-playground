"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Badge, Ribbon, Overlay, Block } from "react-wip-ui";
import { WIP, Modal, Banner, WIPProvider, useWIP } from "react-wip-ui/client";

/*  Shared primitives  */
function Tag({ type }: { type: "server" | "client" }) {
  return (
    <span className={type === "server" ? "tag tag-server" : "tag tag-client"}>
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "currentColor",
          display: "inline-block",
          opacity: 0.7,
        }}
      />
      {type === "server" ? "Server" : "Client"}
    </span>
  );
}

function CodeChip({ children }: { children: string }) {
  return <span className="code-chip">{children}</span>;
}

function PropTable({
  rows,
}: {
  rows: { prop: string; type: string; default?: string; description: string }[];
}) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="prop-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.prop}>
              <td>
                <CodeChip>{r.prop}</CodeChip>
              </td>
              <td
                style={{
                  color: "var(--accent-dark)",
                  fontFamily: "monospace",
                  fontSize: "0.78rem",
                }}
              >
                {r.type}
              </td>
              <td
                style={{
                  color: "var(--text-subtle)",
                  fontFamily: "monospace",
                  fontSize: "0.78rem",
                }}
              >
                {r.default ?? "—"}
              </td>
              <td style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>
                {r.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PillToggle<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { label: string; value: T }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="pill-toggle">
      {options.map((o) => (
        <button
          key={o.value}
          className={value === o.value ? "active" : ""}
          onClick={() => onChange(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/*  Component demos ─ */

// 1. Ribbon
function RibbonDemo() {
  const [position, setPosition] = useState<"top-left" | "top-right">("top-right");
  const [variant, setVariant] = useState<"solid" | "outline">("solid");
  const [text, setText] = useState("WIP");
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="card fade-up">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Ribbon</h3>
              <Tag type="server" />
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
              A diagonal corner ribbon for any positioned container.
            </p>
          </div>
          <CodeChip>{"<Ribbon />"}</CodeChip>
        </div>
      </div>

      <div className="card-body">
        <div className="controls-row" style={{ marginBottom: 20, rowGap: 10 }}>
          <span className="ctrl-label">Position</span>
          <PillToggle
            options={[{ label: "Top Left", value: "top-left" }, { label: "Top Right", value: "top-right" }]}
            value={position}
            onChange={setPosition}
          />
          <span className="ctrl-label">Variant</span>
          <PillToggle
            options={[{ label: "Solid", value: "solid" }, { label: "Outline", value: "outline" }]}
            value={variant}
            onChange={setVariant}
          />
          <input
            className="ctrl-input"
            value={text}
            maxLength={12}
            onChange={(e) => setText(e.target.value)}
            placeholder="Label"
            style={{ width: 100 }}
          />
          <label className="ctrl-check">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
            Disabled
          </label>
        </div>

        <div className="preview-area">
          <div
            style={{
              position: "relative",
              width: 190,
              height: 130,
              background: "white",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <span style={{ fontSize: "0.8rem", color: "var(--text-subtle)" }}>Card content</span>
            <Ribbon position={position} text={text || "WIP"} variant={variant} disabled={disabled} />
          </div>
        </div>
      </div>

      <div className="card-footer">
        <PropTable
          rows={[
            { prop: "position", type: '"top-left" | "top-right"', default: '"top-right"', description: "Which corner the ribbon appears in" },
            { prop: "text", type: "string", default: '"WIP"', description: "Label text on the ribbon" },
            { prop: "variant", type: '"solid" | "outline"', default: '"solid"', description: "Filled or outlined ribbon style" },
            { prop: "disabled", type: "boolean", default: "false", description: "When true, renders nothing" },
          ]}
        />
      </div>
    </div>
  );
}

// 2. Badge
function BadgeDemo() {
  const [text, setText] = useState("WIP");
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="card fade-up delay-1">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Badge</h3>
              <Tag type="server" />
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
              Inline label that attaches to any child element.
            </p>
          </div>
          <CodeChip>{"<Badge />"}</CodeChip>
        </div>
      </div>

      <div className="card-body">
        <div className="controls-row" style={{ marginBottom: 20 }}>
          <span className="ctrl-label">Text</span>
          <input
            className="ctrl-input"
            value={text}
            maxLength={16}
            onChange={(e) => setText(e.target.value)}
            placeholder="Badge label"
            style={{ width: 120 }}
          />
          <label className="ctrl-check">
            <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
            Disabled
          </label>
        </div>

        <div className="preview-area" style={{ flexDirection: "column", alignItems: "flex-start", padding: "24px 28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Badge text={text || "WIP"} disabled={disabled}>
              <button style={{ padding: "8px 18px", borderRadius: "var(--radius-sm)", border: "1.5px solid var(--border)", background: "white", fontSize: "0.85rem", cursor: "pointer", color: "var(--text-primary)" }}>
                Pro Feature
              </button>
            </Badge>
            <Badge text={text || "WIP"} disabled={disabled}>
              <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                Analytics Dashboard
              </span>
            </Badge>
            <Badge text={text || "WIP"} disabled={disabled}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "6px 12px", background: "white", borderRadius: "var(--radius-sm)", border: "1px solid var(--border)", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                Side nav link
              </div>
            </Badge>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <PropTable
          rows={[
            { prop: "text", type: "string", default: '"WIP"', description: "Label shown in the pill" },
            { prop: "disabled", type: "boolean", default: "false", description: "When true, hides the badge" },
            { prop: "children", type: "ReactNode", description: "Element to badge" },
          ]}
        />
      </div>
    </div>
  );
}

// 3. Overlay
function OverlayDemo() {
  const [message, setMessage] = useState("Coming Soon");
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="card fade-up delay-2">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Overlay</h3>
              <Tag type="server" />
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
              Frosted glass overlay that blurs child content.
            </p>
          </div>
          <CodeChip>{"<Overlay />"}</CodeChip>
        </div>
      </div>

      <div className="card-body">
        <div className="controls-row" style={{ marginBottom: 20 }}>
          <span className="ctrl-label">Message</span>
          <input
            className="ctrl-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Overlay message"
            style={{ width: 200 }}
          />
          <label className="ctrl-check">
            <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
            Disabled
          </label>
        </div>

        <div className="preview-area">
          <Overlay message={message || "Coming Soon"} disabled={disabled}>
            <div className="mock-card">
              <label className="mock-label">Email</label>
              <input className="mock-input" defaultValue="user@example.com" readOnly />
              <label className="mock-label">Plan</label>
              <input className="mock-input" defaultValue="Pro — $29/mo" readOnly />
              <div style={{ marginTop: 8, padding: "8px", background: "var(--accent)", color: "white", borderRadius: "var(--radius-sm)", fontSize: "0.8rem", textAlign: "center" }}>
                Save Changes
              </div>
            </div>
          </Overlay>
        </div>
      </div>

      <div className="card-footer">
        <PropTable
          rows={[
            { prop: "message", type: "string", default: '"Coming Soon"', description: "Text in the overlay pill" },
            { prop: "disabled", type: "boolean", default: "false", description: "When true, removes the overlay" },
            { prop: "children", type: "ReactNode", description: "Content underneath the overlay" },
          ]}
        />
      </div>
    </div>
  );
}

// 4. Block
function BlockDemo() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="card fade-up delay-3">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Block</h3>
              <Tag type="server" />
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
              Disables pointer events and text selection on children.
            </p>
          </div>
          <CodeChip>{"<Block />"}</CodeChip>
        </div>
      </div>

      <div className="card-body">
        <div className="controls-row" style={{ marginBottom: 20 }}>
          <label className="ctrl-check" style={{ fontSize: "0.85rem", color: "var(--text-primary)" }}>
            <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
            Allow interaction (disabled=true)
          </label>
        </div>

        <div className="preview-area" style={{ gap: 24 }}>
          <Block disabled={disabled}>
            <div className="mock-card" style={{ opacity: disabled ? 1 : 0.65 }}>
              <label className="mock-label">Subscription</label>
              <input className="mock-input" placeholder="your@email.com" />
              <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
                <div style={{ flex: 1, padding: "8px", background: "var(--accent)", color: "white", borderRadius: "var(--radius-sm)", fontSize: "0.8rem", textAlign: "center" }}>
                  Subscribe
                </div>
                <div style={{ padding: "8px 12px", border: "1px solid var(--border)", background: "white", borderRadius: "var(--radius-sm)", fontSize: "0.8rem" }}>
                  Skip
                </div>
              </div>
            </div>
          </Block>
          <div style={{ maxWidth: 160, fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
            {disabled
              ? "✅ Interaction re-enabled."
              : "🚫 Pointer events blocked. Try clicking the form."}
          </div>
        </div>
      </div>

      <div className="card-footer">
        <PropTable
          rows={[
            { prop: "disabled", type: "boolean", default: "false", description: "When true, removes the block" },
            { prop: "children", type: "ReactNode", description: "Content to be blocked" },
          ]}
        />
      </div>
    </div>
  );
}

// 5. Banner
function BannerDemo() {
  const [message, setMessage] = useState("🚧 This feature is under active development.");
  const [dismissible, setDismissible] = useState(true);
  const [position, setPosition] = useState<"sticky" | "relative">("relative");
  const [key, setKey] = useState(0);

  return (
    <div className="card fade-up">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Banner</h3>
              <Tag type="client" />
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
              Announcement bar — sticky or relative, optionally dismissible.
            </p>
          </div>
          <CodeChip>{"<Banner />"}</CodeChip>
        </div>
      </div>

      <div className="card-body">
        <div className="controls-row" style={{ marginBottom: 12, rowGap: 10 }}>
          <span className="ctrl-label">Position</span>
          <PillToggle
            options={[{ label: "Relative", value: "relative" }, { label: "Sticky", value: "sticky" }]}
            value={position}
            onChange={(v) => { setPosition(v); setKey((k) => k + 1); }}
          />
          <label className="ctrl-check">
            <input type="checkbox" checked={dismissible} onChange={(e) => { setDismissible(e.target.checked); setKey((k) => k + 1); }} />
            Dismissible
          </label>
          <button className="btn btn-ghost btn-sm" onClick={() => setKey((k) => k + 1)}>↺ Reset</button>
        </div>
        <div className="controls-row" style={{ marginBottom: 20 }}>
          <span className="ctrl-label">Message</span>
          <input
            className="ctrl-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ flex: 1, minWidth: 200 }}
          />
        </div>
        <div className="preview-area" style={{ padding: 0, flexDirection: "column" }}>
          <div style={{ width: "100%", background: "white", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border)" }}>
            <Banner key={key} message={message} dismissible={dismissible} position={position} />
            <div style={{ padding: "20px 18px", fontSize: "0.85rem", color: "var(--text-subtle)" }}>
              Page content below the banner sits here...
            </div>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <PropTable
          rows={[
            { prop: "message", type: "string", description: "Text content of the banner" },
            { prop: "dismissible", type: "boolean", default: "false", description: "Adds a × close button" },
            { prop: "position", type: '"sticky" | "relative"', default: '"relative"', description: "Sticky pins to viewport top" },
          ]}
        />
      </div>
    </div>
  );
}

// 6. Modal
function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Feature Under Construction");
  const [description, setDescription] = useState("This module is being actively built. Check back soon for the full experience.");

  return (
    <div className="card fade-up delay-1">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>Modal</h3>
              <Tag type="client" />
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
              Accessible dialog with backdrop blur and slide-up animation.
            </p>
          </div>
          <CodeChip>{"<Modal />"}</CodeChip>
        </div>
      </div>

      <div className="card-body">
        <div className="controls-row" style={{ marginBottom: 12 }}>
          <span className="ctrl-label">Title</span>
          <input className="ctrl-input" value={title} onChange={(e) => setTitle(e.target.value)} style={{ flex: 1, minWidth: 180 }} />
        </div>
        <div className="controls-row" style={{ marginBottom: 20 }}>
          <span className="ctrl-label">Description</span>
          <input className="ctrl-input" value={description} onChange={(e) => setDescription(e.target.value)} style={{ flex: 1, minWidth: 180 }} />
        </div>

        <div className="preview-area">
          <button className="btn btn-primary highlight" onClick={() => setIsOpen(true)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Open Modal
          </button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title} description={description} />
        </div>
      </div>

      <div className="card-footer">
        <PropTable
          rows={[
            { prop: "isOpen", type: "boolean", description: "Controls modal visibility" },
            { prop: "onClose", type: "() => void", description: "Called on close (Esc or × button)" },
            { prop: "title", type: "string", description: "Modal heading" },
            { prop: "description", type: "string", description: "Supporting body text" },
          ]}
        />
      </div>
    </div>
  );
}

// 7. WIP Wrapper
function WIPDemo() {
  const [when, setWhen] = useState(true);

  return (
    <div className="card fade-up delay-2">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>WIP Wrapper</h3>
              <Tag type="client" />
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
              Composable wrapper — conditional WIP treatment.
            </p>
          </div>
          <CodeChip>{"<WIP when={…} />"}</CodeChip>
        </div>
      </div>

      <div className="card-body">
        <div className="controls-row" style={{ marginBottom: 20 }}>
          <label className="ctrl-check" style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 500 }}>
            <input type="checkbox" checked={when} onChange={(e) => setWhen(e.target.checked)} />
            WIP active
          </label>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.72rem",
              fontWeight: 700,
              background: when ? "#FFF4E8" : "#EBF4E8",
              color: when ? "#A87040" : "#367A35",
              border: `1.5px solid ${when ? "#E8C8A0" : "#BCDAB4"}`,
            }}
          >
            {when ? "⚠ WIP active" : "✓ Live"}
          </span>
        </div>

        <div className="preview-area">
          <WIP when={when}>
            <div className="mock-card" style={{ width: 210 }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-subtle)", marginBottom: 10 }}>
                New Dashboard
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {[70, 45, 85].map((w, i) => (
                  <div key={i} style={{ height: 7, background: "var(--bg-muted)", borderRadius: 99, overflow: "hidden" }}>
                    <div style={{ width: `${w}%`, height: "100%", background: "var(--accent)", borderRadius: 99, opacity: 0.7 }} />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
                <div style={{ flex: 1, height: 28, background: "var(--bg-muted)", borderRadius: "var(--radius-sm)" }} />
                <div style={{ width: 28, height: 28, background: "var(--bg-muted)", borderRadius: "var(--radius-sm)" }} />
              </div>
            </div>
          </WIP>
        </div>
      </div>

      <div className="card-footer">
        <PropTable
          rows={[
            { prop: "when", type: "boolean", default: "true", description: "Activates WIP styling when true" },
            { prop: "children", type: "ReactNode", description: "Feature being marked as WIP" },
          ]}
        />
      </div>
    </div>
  );
}

// 8. Provider + useWIP
function ProviderDemo() {
  const [globalDisabled, setGlobalDisabled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className="card fade-up delay-3">
      <div className="card-header">
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1rem" }}>WIPProvider + useWIP</h3>
              <Tag type="client" />
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
              Global context — disable all WIP components at once.
            </p>
          </div>
          <CodeChip>{"<WIPProvider />"}</CodeChip>
        </div>
      </div>

      <div className="card-body">
        <div className="controls-row" style={{ marginBottom: 20 }}>
          <span className="ctrl-label">Theme</span>
          <PillToggle
            options={[{ label: "Light", value: "light" }, { label: "Dark", value: "dark" }]}
            value={theme}
            onChange={setTheme}
          />
          <label className="ctrl-check">
            <input type="checkbox" checked={globalDisabled} onChange={(e) => setGlobalDisabled(e.target.checked)} />
            globalDisabled (prod mode)
          </label>
        </div>

        <div className="preview-area" style={{ flexDirection: "column", gap: 14 }}>
          <WIPProvider theme={theme} globalDisabled={globalDisabled}>
            <ProviderInner globalDisabled={globalDisabled} theme={theme} />
          </WIPProvider>
        </div>

        <div
          style={{ marginTop: 14, padding: "12px 16px", background: "var(--bg-dark)", borderRadius: "var(--radius-md)", fontFamily: "monospace", fontSize: "0.78rem", color: "#C8D9B4", border: "1px solid var(--border-dark)", lineHeight: 1.8 }}
        >
          <span style={{ color: "#A8C890" }}>{"<WIPProvider"}</span>
          {" "}
          <span style={{ color: "#90C8A8" }}>theme</span>
          <span style={{ color: "#C8D9B4" }}>=</span>
          <span style={{ color: "#D4C890" }}>{`"${theme}"`}</span>
          {" "}
          <span style={{ color: "#90C8A8" }}>globalDisabled</span>
          <span style={{ color: "#C8D9B4" }}>={"{"}</span>
          <span style={{ color: "#D4C890" }}>{String(globalDisabled)}</span>
          <span style={{ color: "#C8D9B4" }}>{"}"}</span>
          <span style={{ color: "#A8C890" }}>{">"}</span>
        </div>
      </div>

      <div className="card-footer">
        <PropTable
          rows={[
            { prop: "theme", type: '"light" | "dark"', default: '"light"', description: "Sets CSS custom props for all WIP children" },
            { prop: "globalDisabled", type: "boolean", default: "false", description: "When true, strips WIP from all children" },
            { prop: "defaultVariant", type: '"overlay" | "block" | "ribbon" | "badge"', description: "Default WIP variant for <WIP /> wrappers" },
          ]}
        />
      </div>
    </div>
  );
}

function ProviderInner({ globalDisabled, theme }: { globalDisabled: boolean; theme: string }) {
  const ctx = useWIP();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: 360 }}>
      <div
        style={{
          padding: "12px 14px",
          background: theme === "dark" ? "#1A1918" : "white",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)",
          fontFamily: "monospace",
          fontSize: "0.8rem",
          color: theme === "dark" ? "#C8D9B4" : "var(--text-primary)",
        }}
      >
        <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: theme === "dark" ? "#668855" : "var(--text-subtle)", marginBottom: 8 }}>
          useWIP() output
        </div>
        <div>theme: <span style={{ color: "var(--accent)" }}>{ctx.theme ?? "light"}</span></div>
        <div>globalDisabled: <span style={{ color: "var(--accent)" }}>{String(ctx.globalDisabled ?? false)}</span></div>
      </div>

      <div
        data-rwip-theme={theme === "dark" ? "dark" : undefined}
        style={{ position: "relative", background: theme === "dark" ? "#1A1918" : "white", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", overflow: "hidden" }}
      >
        <WIP when={!globalDisabled}>
          <div style={{ padding: "16px", fontSize: "0.85rem", color: theme === "dark" ? "#C4B9AD" : "var(--text-muted)" }}>
            Premium feature content lives here
          </div>
        </WIP>
      </div>

      {globalDisabled && (
        <div style={{ fontSize: "0.78rem", color: "#3A7035", background: "#EBF4E8", borderRadius: "var(--radius-sm)", padding: "8px 12px", border: "1px solid #BCDAB4" }}>
          ✓ globalDisabled — WIP removed everywhere
        </div>
      )}
    </div>
  );
}

/*  Sidebar nav data  */
const NAV = [
  {
    group: "Server Components",
    hint: "import from 'react-wip-ui'",
    items: [
      { id: "ribbon", label: "Ribbon", type: "server" as const },
      { id: "badge", label: "Badge", type: "server" as const },
      { id: "overlay", label: "Overlay", type: "server" as const },
      { id: "block", label: "Block", type: "server" as const },
    ],
  },
  {
    group: "Client Components",
    hint: "import from 'react-wip-ui/client'",
    items: [
      { id: "banner", label: "Banner", type: "client" as const },
      { id: "modal", label: "Modal", type: "client" as const },
      { id: "wip", label: "WIP Wrapper", type: "client" as const },
      { id: "provider", label: "Provider + useWIP", type: "client" as const },
    ],
  },
];

const NAV_ICONS: Record<string, React.ReactNode> = {
  ribbon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  badge: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /></svg>,
  overlay: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /></svg>,
  block: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" /></svg>,
  banner: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16a2 2 0 0 1 2 2v4H2V6a2 2 0 0 1 2-2z" /></svg>,
  modal: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="9" y1="3" x2="9" y2="21" /></svg>,
  wip: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M20 12h2M2 12h2" /></svg>,
  provider: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
};

/*  Sidebar inner content ─ */
function SidebarContent({
  active,
  onNav,
}: {
  active: string;
  onNav: (id: string) => void;
}) {
  return (
    <>
      {/* Logo */}
      <div style={{ padding: "20px 16px 14px", borderBottom: "1px solid var(--border)" }}>
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 6, textDecoration: "none" }}
        >
          <div style={{ width: 28, height: 28, borderRadius: "var(--radius-sm)", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
              react-wip-ui
            </div>
            <div style={{ fontSize: "0.65rem", color: "var(--text-subtle)", fontFamily: "monospace" }}>v1.0.0</div>
          </div>
        </Link>
        <p style={{ margin: 0, fontSize: "0.72rem", color: "var(--text-subtle)", lineHeight: 1.5 }}>
          Interactive playground
        </p>
      </div>

      {/* Nav */}
      <nav style={{ padding: "14px 10px", flex: 1, overflowY: "auto" }}>
        {NAV.map((group) => (
          <div key={group.group} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-subtle)", padding: "0 6px", marginBottom: 5 }}>
              {group.group}
            </div>
            {group.items.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${active === item.id ? "active" : ""}`}
                onClick={() => onNav(item.id)}
              >
                <span style={{ opacity: 0.65, flexShrink: 0 }}>{NAV_ICONS[item.id]}</span>
                <span style={{ flex: 1 }}>{item.label}</span>
                {item.type === "server" && (
                  <span className="tag tag-server" style={{ padding: "1px 6px", fontSize: "0.58rem" }}>SSR</span>
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: "12px 16px", borderTop: "1px solid var(--border)", fontSize: "0.72rem" }}>
        <a href="https://www.npmjs.com/package/react-wip-ui" target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", marginBottom: 4, textDecoration: "none" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm4 4h16v16H4V4zm2 2v12h8v-2H8V6H6zm8 0v12h4V6h-4z" /></svg>
          npm package
        </a>
        <span style={{ color: "var(--text-subtle)" }}>MIT License</span>
      </div>
    </>
  );
}

/*  Main Playground ─ */
export default function Playground() {
  const [active, setActive] = useState("ribbon");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const allIds = NAV.flatMap((g) => g.items.map((i) => i.id));

  const scrollTo = (id: string) => {
    setActive(id);
    setDrawerOpen(false);
    setTimeout(() => {
      const el = document.getElementById(`section-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  // Track active section on scroll
  useEffect(() => {
    const handler = () => {
      for (const id of [...allIds].reverse()) {
        const el = document.getElementById(`section-${id}`);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [allIds]);

  return (
    <div className="pg-layout">
      {/*  Desktop Sidebar  */}
      <aside className="pg-sidebar">
        <SidebarContent active={active} onNav={scrollTo} />
      </aside>

      {/*  Mobile Drawer overlay  */}
      <div
        className={`pg-drawer-overlay ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />
      <div className={`pg-drawer ${drawerOpen ? "open" : ""}`}>
        <SidebarContent active={active} onNav={scrollTo} />
      </div>

      {/*  Main  */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {/* Mobile top bar */}
        <div className="pg-topbar">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              className="btn btn-ghost btn-sm"
              style={{ padding: "6px", border: "1.5px solid var(--border)", borderRadius: "var(--radius-sm)" }}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <span style={{ fontWeight: 700, fontSize: "0.875rem" }}>react-wip-ui</span>
          </div>
          {/* Quick tabs on mobile */}
          <div className="tabs-strip" style={{ flex: 1, marginLeft: 12 }}>
            {allIds.map((id) => (
              <button
                key={id}
                className={`tab-btn ${active === id ? "active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <main className="pg-main">
          {/* Page header */}
          <div style={{ marginBottom: 40, paddingBottom: 32, borderBottom: "1px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "var(--accent-muted)",
                  border: "1.5px solid var(--accent-light)",
                  borderRadius: "var(--radius-full)",
                  padding: "4px 14px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: "var(--accent-dark)",
                  letterSpacing: "0.06em",
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                Interactive Playground
              </div>
              <Link
                href="/"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-subtle)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                ← Back to docs
              </Link>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              react-wip-ui
            </h1>
            <p style={{ color: "var(--text-muted)", maxWidth: 520, fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 18 }}>
              Production-ready components for marking features as{" "}
              <em>Work In Progress</em>. SSR-safe, accessible, designed for Next.js App Router.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0,
                background: "var(--bg-dark)",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-dark)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "10px 16px", fontFamily: "monospace", fontSize: "0.82rem", color: "#C8D9B4" }}>
                <span style={{ color: "#668855" }}>$</span>{" "}
                npm install <span style={{ color: "#B4CCA0" }}>react-wip-ui</span>
              </div>
            </div>
          </div>

          {/*  Server components  */}
          <div className="section-label">
            <span>Server Components — import from &apos;react-wip-ui&apos;</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div id="section-ribbon"><RibbonDemo /></div>
            <div id="section-badge"><BadgeDemo /></div>
            <div id="section-overlay"><OverlayDemo /></div>
            <div id="section-block"><BlockDemo /></div>
          </div>

          {/*  Client components  */}
          <div className="section-label">
            <span>Client Components — import from &apos;react-wip-ui/client&apos;</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div id="section-banner"><BannerDemo /></div>
            <div id="section-modal"><ModalDemo /></div>
            <div id="section-wip"><WIPDemo /></div>
            <div id="section-provider"><ProviderDemo /></div>
          </div>

          {/* Footer */}
          <div style={{ marginTop: 60, paddingTop: 28, borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: "0.78rem", color: "var(--text-subtle)" }}>
              react-wip-ui v1.0.0 · MIT License
            </span>
            <Link href="/" style={{ fontSize: "0.78rem", color: "var(--accent)", textDecoration: "none" }}>
              ← Back to landing page
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
