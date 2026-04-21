import { PlayCircle } from "lucide-react";

export function VideoPlaceholder({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="aspect-video rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(244,114,182,0.25),rgba(251,191,36,0.14),rgba(8,47,73,0.95))] p-6">
      <div className="flex h-full items-center justify-center">
        <div className="grid place-items-center gap-4 text-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-white/10">
            <PlayCircle className="h-10 w-10" />
          </div>
          <div className="text-xl font-bold">{title}</div>
          <div className="max-w-xl text-sm leading-7 text-slate-100/78">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
