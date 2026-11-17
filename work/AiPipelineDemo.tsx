"use client";

import React, { useState } from "react";
import { Database, Sliders, Cpu, BarChart3, Target, CheckCircle, Terminal } from "lucide-react";

type PipelineStage = "data" | "preprocess" | "train" | "evaluate" | "predict";

interface StageInfo {
  id: PipelineStage;
  num: string;
  name: string;
  title: string;
  description: string;
  codeSnippet: string;
}

const STAGES: StageInfo[] = [
  {
    id: "data",
    num: "01",
    name: "DATA",
    title: "Collect and organize",
    description:
      "Images are gathered and sorted into labelled classes, then divided into training and validation sets. Quality and balanced distributions dictate the ceiling of model performance.",
    codeSnippet: `from torchvision.datasets import ImageFolder
from torch.utils.data import DataLoader

data = ImageFolder("data/train", transform=tf)
loader = DataLoader(data, batch_size=32, shuffle=True)`,
  },
  {
    id: "preprocess",
    num: "02",
    name: "PREPROCESS",
    title: "Augment & normalize tensors",
    description:
      "Resizing to consistent dimensions (224×224), random horizontal flips for rotational invariance, and normalization using standard ImageNet mean and standard deviations.",
    codeSnippet: `tf = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.RandomHorizontalFlip(p=0.5),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225])
])`,
  },
  {
    id: "train",
    num: "03",
    name: "TRAIN",
    title: "Backpropagation & optimization",
    description:
      "Iterating through batches across epochs. Forward pass computes logits, cross-entropy loss quantifies error, and AdamW optimizer updates convolutional weights via autograd.",
    codeSnippet: `for epoch in range(num_epochs):
    for images, targets in loader:
        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, targets)
        loss.backward()
        optimizer.step()`,
  },
  {
    id: "evaluate",
    num: "04",
    name: "EVALUATE",
    title: "Validation curves & confusion matrix",
    description:
      "Assessing generalization on unseen holdout datasets. Inspecting per-class precision, recall, top-1 accuracy, and confusion hotspots to diagnose overfitting.",
    codeSnippet: `model.eval()
with torch.no_grad():
    for images, targets in val_loader:
        logits = model(images)
        preds = torch.argmax(logits, dim=1)
        metric_tracker.update(preds, targets)`,
  },
  {
    id: "predict",
    num: "05",
    name: "PREDICT",
    title: "Inference & confidence scoring",
    description:
      "Single-sample pass through the trained feature extractor with Softmax activation yielding calibrated class probabilities and predicted semantic labels.",
    codeSnippet: `with torch.inference_mode():
    sample_tensor = preprocess(raw_image).unsqueeze(0)
    probabilities = torch.softmax(model(sample_tensor), dim=1)
    confidence, predicted_idx = torch.max(probabilities, 1)`,
  },
];

export default function AiPipelineDemo() {
  const [activeStage, setActiveStage] = useState<PipelineStage>("data");
  const stage = STAGES.find((s) => s.id === activeStage) || STAGES[0];

  return (
    <div className="border border-ivory/15 bg-ink-card shadow-2xl overflow-hidden rounded-lg">
      {/* Header Pipeline Stepper */}
      <div className="border-b border-ivory/10 bg-ink-deep px-6 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-rose animate-pulse" />
            <span className="font-mono text-xs text-rose uppercase tracking-widest font-semibold">
              PyTorch Deep Learning Pipeline
            </span>
          </div>

          <span className="font-mono text-[11px] text-ivory/40 tracking-wider">
            Illustrative visualization — not model results.
          </span>
        </div>

        {/* 5-Stage Navigation Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {STAGES.map((s) => {
            const isSelected = s.id === activeStage;
            return (
              <button
                key={s.id}
                onClick={() => setActiveStage(s.id)}
                className={`flex items-center gap-2 p-2.5 rounded border font-mono text-xs transition-all text-left ${
                  isSelected
                    ? "border-rose bg-rose/15 text-ivory ring-1 ring-rose/50"
                    : "border-ivory/10 bg-ink/50 text-ivory/50 hover:border-ivory/25 hover:text-ivory"
                }`}
              >
                <span className={isSelected ? "text-rose font-bold" : "text-ivory/40"}>
                  {s.num}
                </span>
                <span className="tracking-wider">{s.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Stage Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-ivory/10">
        {/* Left: Interactive Architectural Visualizer (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-ink-deep/30">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-rose tracking-widest uppercase">
                Stage {stage.num} / Visual Representation
              </span>
              <h4 className="font-serif text-2xl font-light text-ivory mt-1">
                {stage.title}
              </h4>
            </div>
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-ivory/5 border border-ivory/10 text-ivory/70">
              PyTorch · Python · NumPy
            </span>
          </div>

          {/* DYNAMIC STAGE VISUALIZATION CANVAS / DIAGRAM */}
          <div className="border border-ivory/10 bg-[#0E161D] p-6 rounded-lg min-h-[280px] flex flex-col justify-center">
            {activeStage === "data" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex justify-between text-xs font-mono text-ivory/60 border-b border-ivory/10 pb-2">
                  <span>DATASET DIRECTORY (ImageFolder)</span>
                  <span>10,000 EXAMPLES</span>
                </div>
                <div className="grid grid-cols-4 gap-3 text-center">
                  {["Class A (Craters)", "Class B (Terrain)", "Class C (Atmosphere)", "Class D (Stars)"].map((cls, i) => (
                    <div key={cls} className="p-3 bg-ink-card border border-ivory/10 rounded">
                      <div className="h-14 bg-gradient-to-br from-ink-surface to-rose/10 flex items-center justify-center font-mono text-xs text-rose mb-2 rounded">
                        2,500 imgs
                      </div>
                      <span className="text-[10px] font-mono text-ivory/70">{cls}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-ivory/40 pt-2">
                  <span>Train split: 80% (8,000)</span>
                  <span>Val split: 20% (2,000)</span>
                  <span>Batch size: 32</span>
                </div>
              </div>
            )}

            {activeStage === "preprocess" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex justify-between text-xs font-mono text-ivory/60 border-b border-ivory/10 pb-2">
                  <span>TRANSFORMATION PIPELINE</span>
                  <span>TENSOR: [32, 3, 224, 224]</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center py-4">
                  <div className="p-3 border border-ivory/15 bg-ink-card rounded flex-1">
                    <span className="text-xs font-mono text-ivory/50 block">Input</span>
                    <span className="font-serif text-sm text-ivory">Raw RGB (Variable)</span>
                  </div>
                  <span className="font-mono text-rose text-xs">→ Resize (224×224) →</span>
                  <div className="p-3 border border-ivory/15 bg-ink-card rounded flex-1">
                    <span className="text-xs font-mono text-ivory/50 block">Augment</span>
                    <span className="font-serif text-sm text-ivory">Flip & Jitter</span>
                  </div>
                  <span className="font-mono text-rose text-xs">→ Normalize →</span>
                  <div className="p-3 border border-rose/40 bg-rose/10 rounded flex-1">
                    <span className="text-xs font-mono text-rose block">Normalized</span>
                    <span className="font-serif text-sm text-ivory">Float32 Tensor</span>
                  </div>
                </div>
              </div>
            )}

            {activeStage === "train" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex justify-between text-xs font-mono text-ivory/60 border-b border-ivory/10 pb-2">
                  <span>CONVOLUTIONAL FORWARD / BACKWARD</span>
                  <span>EPOCH 24/30</span>
                </div>
                {/* Simulated Neural Layer Flow */}
                <div className="flex items-center justify-between gap-2 py-3 px-2">
                  {["Input [3,224,224]", "Conv2d + ReLU", "MaxPool", "Residual Block", "Linear [512, 4]"].map((layer, idx) => (
                    <div key={layer} className="text-center flex-1">
                      <div className="h-20 bg-ink-card border border-rose/30 rounded flex flex-col items-center justify-center p-1 hover:border-rose transition-colors">
                        <span className="text-[10px] font-mono text-rose">L0{idx + 1}</span>
                        <span className="text-[10px] font-mono text-ivory/80 leading-tight mt-1">{layer}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-mono text-[11px] text-ivory/50 pt-2">
                  <span>Current Loss: 0.284</span>
                  <span>Optimizer: AdamW (lr=3e-4)</span>
                  <span>Gradient: Converging</span>
                </div>
              </div>
            )}

            {activeStage === "evaluate" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex justify-between text-xs font-mono text-ivory/60 border-b border-ivory/10 pb-2">
                  <span>VALIDATION MATRIX (CONFUSION HEATMAP)</span>
                  <span>ACCURACY: 92.4%</span>
                </div>
                {/* 4x4 Mock Heatmap */}
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono py-2">
                  <div className="p-2 bg-rose/40 text-ivory rounded font-bold">94% (Hit)</div>
                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">3%</div>
                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">2%</div>
                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">1%</div>

                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">2%</div>
                  <div className="p-2 bg-rose/40 text-ivory rounded font-bold">91% (Hit)</div>
                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">5%</div>
                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">2%</div>

                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">1%</div>
                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">4%</div>
                  <div className="p-2 bg-rose/40 text-ivory rounded font-bold">93% (Hit)</div>
                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">2%</div>

                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">3%</div>
                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">2%</div>
                  <div className="p-2 bg-ivory/5 text-ivory/40 rounded">3%</div>
                  <div className="p-2 bg-rose/40 text-ivory rounded font-bold">92% (Hit)</div>
                </div>
                <div className="text-[11px] font-mono text-ivory/50 text-right">
                  Diagonal shows high true-positive density with low off-axis leakage.
                </div>
              </div>
            )}

            {activeStage === "predict" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex justify-between text-xs font-mono text-ivory/60 border-b border-ivory/10 pb-2">
                  <span>SINGLE SAMPLE INFERENCE</span>
                  <span>LATENCY: 14ms (GPU)</span>
                </div>
                <div className="p-4 bg-ink-card border border-rose/30 rounded-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base text-ivory">Predicted: Class A (Craters)</span>
                    <span className="font-mono text-xs text-rose font-bold">96.8% Confidence</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-ivory/60">
                      <span>Craters</span>
                      <span>0.968</span>
                    </div>
                    <div className="h-1.5 w-full bg-ink rounded-full overflow-hidden">
                      <div className="h-full bg-rose w-[96.8%]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <p className="text-sm text-ivory/70 font-light leading-relaxed">
            {stage.description}
          </p>
        </div>

        {/* Right: Real PyTorch Code Inspection (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-ink-deep/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-ivory/40 tracking-widest uppercase mb-4">
              <Terminal className="h-3.5 w-3.5 text-rose" />
              <span>Implementation Fragment</span>
            </div>

            <div className="rounded-lg bg-[#0A0F14] border border-ivory/15 p-4 font-mono text-xs text-ivory/90 leading-relaxed overflow-x-auto shadow-inner">
              <pre className="text-sage">
                <code>{stage.codeSnippet}</code>
              </pre>
            </div>
          </div>

          <div className="mt-6 border-t border-ivory/10 pt-4 font-mono text-[11px] text-ivory/50 space-y-1">
            <div className="flex justify-between">
              <span>Framework:</span>
              <span className="text-ivory">PyTorch 2.x</span>
            </div>
            <div className="flex justify-between">
              <span>Execution mode:</span>
              <span className="text-ivory">Deterministic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
