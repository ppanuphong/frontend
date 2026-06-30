import {
  Activity,
  ChevronDown,
  CircleAlert,
  Download,
  LayoutGrid,
  Microscope,
  Play,
  Search,
  Shield,
  Upload,
  UserRound,
  Waves,
} from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TabsList, TabsTrigger } from "../ui/tabs";

const metrics = [
  {
    id: null,
    label: "Sample ID",
    value: "NMR-2026-X99",
    valueId: "scorecard-id",
    tone: "from-sky-50 to-sky-100/80 border-sky-200/80",
    icon: <UserRound className="h-4 w-4" />,
  },
  {
    id: null,
    label: "Screened Extract",
    value: "Sugarcane Extract",
    valueId: "scorecard-extract",
    tone: "from-violet-50 to-fuchsia-50 border-violet-200/80",
    icon: <Microscope className="h-4 w-4" />,
  },
  {
    id: null,
    label: "Analysis Status",
    value: "Pending",
    valueId: "scorecard-status",
    tone: "from-cyan-50 to-sky-50 border-cyan-200/80",
    icon: <Activity className="h-4 w-4" />,
  },
  {
    id: "scorecard-qc-box",
    label: "Physics QC",
    value: "UNVERIFIED",
    valueId: "scorecard-qc",
    tone: "from-slate-50 to-slate-100/80 border-slate-200/90",
    icon: <Shield className="h-4 w-4" />,
  },
];

export function NmrDashboard() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow glow-1" aria-hidden="true" />
      <div className="bg-glow glow-2" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <header className="glass-panel mb-5 flex flex-col gap-4 rounded-3xl border border-slate-200/80 px-5 py-4 shadow-[0_18px_60px_-32px_rgba(15,23,42,0.35)] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-400 to-violet-500 text-white shadow-lg shadow-sky-200/70">
              <Waves className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight text-slate-950">
                NMR<span className="text-sky-600">Suite</span>
              </div>
              <div className="text-sm text-slate-500">AI Metabolomics Diagnostic Platform · BDI KKU</div>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <TabsList className="w-fit">
              <TabsTrigger active>Dashboard</TabsTrigger>
              <TabsTrigger>Library</TabsTrigger>
              <TabsTrigger>Reports</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Badge variant="emerald" className="gap-1 normal-case tracking-normal text-[11px]">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                Pipeline Live
              </Badge>
              <Badge variant="violet">TRL 5+</Badge>
            </div>
          </div>
        </header>

        <div className="grid flex-1 gap-5 xl:grid-cols-[320px_minmax(0,1fr)]">
          <Card className="glass-panel h-fit">
            <CardContent className="space-y-6 p-5">
              <div className="space-y-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Sample Source</div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="sample-select">
                    Patient Profile
                  </label>
                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
                    <select id="sample-select" className="w-full bg-transparent text-sm text-slate-700 outline-none" defaultValue="Plant_Extract_A">
                      <option value="Plant_Extract_A">Patient #001 — Sugarcane</option>
                      <option value="Plant_Extract_B">Patient #002 — Coffee</option>
                      <option value="Plant_Extract_C">Patient #003 — Soybean</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="file-upload">
                    Upload NMR File
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-600 transition hover:border-sky-300 hover:bg-sky-50/60 hover:text-sky-700" htmlFor="file-upload">
                    <Upload className="h-4 w-4" />
                    <span>Drop CSV / TXT here</span>
                    <input type="file" id="file-upload" className="hidden-input" accept=".csv,.txt" />
                  </label>
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="space-y-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Spectrometer Perturbations</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <label className="text-sm font-medium text-slate-700" htmlFor="noise-slider">Baseline Noise</label>
                    <code className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600" id="noise-val">0.015</code>
                  </div>
                  <input type="range" id="noise-slider" className="fancy-slider" min="0.005" max="0.08" step="0.005" defaultValue="0.015" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <label className="text-sm font-medium text-slate-700" htmlFor="drift-slider">Chemical Shift Drift</label>
                    <code className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600" id="drift-val">+0.015</code>
                  </div>
                  <input type="range" id="drift-slider" className="fancy-slider" min="-0.04" max="0.04" step="0.005" defaultValue="0.015" />
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <div className="space-y-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Physics Constraint Gate</div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <label className="flex items-center gap-3" htmlFor="ghost-checkbox">
                    <input type="checkbox" id="ghost-checkbox" className="sr-only" />
                    <span className="toggle-switch" />
                    <span className="text-sm font-medium text-slate-700">Inject Ghost Peak</span>
                  </label>
                  <span className="text-xs text-slate-500">Simulates anomalous contaminant</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <label className="text-sm font-medium text-slate-700" htmlFor="ebm-slider">EBM Energy Limit</label>
                    <code className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600" id="ebm-val">1.1</code>
                  </div>
                  <input type="range" id="ebm-slider" className="fancy-slider" min="0.5" max="2.0" step="0.1" defaultValue="1.1" />
                </div>
              </div>

              <div className="h-px bg-slate-200" />

              <Button id="analyze-btn" className="run-btn h-11 w-full rounded-2xl">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                <span className="btn-text">Run AI Diagnostic</span>
                <span className="btn-loader hidden" />
              </Button>
            </CardContent>
          </Card>

          <main className="space-y-5">
            <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
              {metrics.map((metric) => (
                <Card key={metric.label} id={metric.id ?? undefined} className={`border bg-gradient-to-br ${metric.tone}`}>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">{metric.icon}</div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{metric.label}</div>
                      <div className="truncate pt-1 text-lg font-semibold text-slate-950" id={metric.valueId}>{metric.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>

            <div id="alert-banner" className="alert-strip hidden">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-slate-700 shadow-sm">
                <CircleAlert className="h-5 w-5" />
              </div>
              <div>
                <span className="alert-badge" id="alert-badge">ANOMALY</span>
                <strong className="alert-title" id="alert-title">Diagnostic Alert</strong>
                <p className="alert-desc" id="alert-desc">Alert details...</p>
              </div>
            </div>

            <section className="grid gap-5 2xl:grid-cols-[1.15fr_0.85fr]">
              <Card className="glass-panel">
                <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
                  <div>
                    <CardTitle className="text-base">Signal Overlay — Active Patient</CardTitle>
                    <CardDescription>Drifted vs. Aligned · Interactive Zoom</CardDescription>
                  </div>
                  <Badge variant="sky">Pane A</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div id="plotly-overlay" className="plotly-box" style={{ height: 260 }} />
                  <div className="flex items-center gap-2 text-sm font-medium text-sky-700">
                    <Search className="h-4 w-4" />
                    <span id="zoom-region-label">Peak Label View — Sugar Region (3.2–4.5 ppm)</span>
                  </div>
                  <div id="plotly-zoom" className="plotly-box" style={{ height: 190 }} />
                </CardContent>
              </Card>

              <Card className="glass-panel">
                <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
                  <div>
                    <CardTitle className="text-base">Reference Library — Waterfall Stack</CardTitle>
                    <CardDescription>Vertical offset per compound class</CardDescription>
                  </div>
                  <Badge variant="violet">Pane B</Badge>
                </CardHeader>
                <CardContent>
                  <div id="plotly-waterfall" className="plotly-box" style={{ height: 460 }} />
                </CardContent>
              </Card>
            </section>

            <Card className="glass-panel">
              <CardHeader className="flex flex-col gap-3 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <CardTitle className="text-base">Identified Biomarkers</CardTitle>
                  <CardDescription>Deconvolution of NMR peak integrals mapped to HMDB reference database</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="sky">HMDB</Badge>
                  <Badge variant="default">Quantitative</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-50 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-500">
                      <tr>
                        <th className="px-4 py-3">Metabolite</th>
                        <th className="px-4 py-3">Formula</th>
                        <th className="px-4 py-3">HMDB Ref</th>
                        <th className="px-4 py-3">Confidence</th>
                        <th className="px-4 py-3">Rel. Concentration</th>
                      </tr>
                    </thead>
                    <tbody id="biomarker-tbody" className="[&_td]:border-t [&_td]:border-slate-200 [&_td]:px-4 [&_td]:py-3 [&_tr:hover]:bg-slate-50/80" />
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel overflow-hidden">
              <button className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50" id="accordion-toggle" type="button">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                    <LayoutGrid className="h-4 w-4" />
                  </div>
                  <span>Advanced AI Engine — ML Diagnostics Panel</span>
                </div>
                <ChevronDown className="accordion-chevron h-4 w-4 text-slate-500" />
              </button>

              <div className="hidden border-t border-slate-200 px-5 pb-5 pt-4" id="accordion-panel">
                <div className="pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Stage 1 & 2 · Latent Projection + Neural ODE</div>
                <div className="grid gap-4 lg:grid-cols-2">
                  <Card className="rounded-2xl border-slate-200 bg-slate-50/80 shadow-none">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Latent Feature Activations (128-D)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div id="plotly-latent" style={{ height: 200 }} />
                    </CardContent>
                  </Card>
                  <Card className="rounded-2xl border-slate-200 bg-slate-50/80 shadow-none">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">ODE Integration Trajectory</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div id="plotly-ode" style={{ height: 200 }} />
                    </CardContent>
                  </Card>
                </div>

                <div className="pb-3 pt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Stage 3 & 4 · EBM Physics Engine + EMR Payload</div>
                <div className="grid gap-4 xl:grid-cols-[240px_minmax(0,1fr)]">
                  <Card className="rounded-2xl border-slate-200 bg-slate-50/80 shadow-none">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">EBM Energy Score</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                      <div className="gauge-ring" id="gauge-circle">
                        <div className="text-center">
                          <span className="mono block text-2xl font-bold text-slate-950" id="gauge-val">0.000</span>
                          <span className="gauge-tag" id="gauge-lbl">STABLE</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="rounded-2xl border-slate-200 bg-slate-50/80 shadow-none">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Clinical EMR JSON Payload</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <pre className="json-viewer rounded-2xl border border-slate-200 bg-white p-4 text-[11.5px] leading-6 text-slate-700" id="json-payload">&#123; "status": "Run pipeline analysis to load hospital payload..." &#125;</pre>
                      <Button className="h-10 rounded-xl" id="download-json-btn" variant="secondary">
                        <Download className="h-4 w-4" />
                        Download Clinical JSON
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="pb-3 pt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">Stage 5 · Model Benchmark · Classification Accuracy</div>
                <Card className="rounded-2xl border-slate-200 bg-slate-50/80 shadow-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">ML Accuracy Comparison — Baseline vs. Hybrid Pipeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div id="plotly-accuracy" style={{ height: 240 }} />
                  </CardContent>
                </Card>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </>
  );
}
