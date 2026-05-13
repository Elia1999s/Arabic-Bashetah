import { PlayCircle } from "lucide-react";

export function VideoPlaceholder({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="aspect-video rounded-[24px] border border-slate-200 bg-gradient-to-br from-fuchsia-100/50 via-amber-50/50 to-slate-50 p-6">
      <div className="flex h-full items-center justify-center">
        <div className="grid place-items-center gap-4 text-center">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-white/80 shadow-sm text-slate-700">
            <PlayCircle className="h-10 w-10" />
          </div>
          <div className="text-xl font-bold text-slate-900">{title}</div>
          <div className="max-w-xl text-sm leading-7 text-slate-600">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
