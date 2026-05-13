"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/section-title";
import { UploadCloud, CheckCircle2, Loader2, ImageIcon } from "lucide-react";
import Image from "next/image";

export default function UploadPhotoPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setSuccess(false);
      setError("");
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setUploading(true);
      setError("");
      
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload-photo", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "שגיאה בהעלאת התמונה");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <SectionTitle eyebrow="פאנל ניהול" title="העלאת תמונת מורה" text="העלה תמונה שתוצג בדף הבית באזור 'הכירו את המורה'." />

      <div className="mt-10 glass rounded-[30px] p-8">
        <div className="flex flex-col items-center justify-center">
          
          <div className="w-full relative border-2 border-dashed border-slate-300 rounded-[20px] p-10 flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
            <input 
              type="file" 
              accept="image/*" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={handleFileChange}
            />
            
            {preview ? (
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image src={preview} alt="Preview" fill className="object-cover" />
              </div>
            ) : (
              <>
                <div className="w-16 h-16 rounded-full bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 mb-4 group-hover:scale-110 transition-transform">
                  <ImageIcon className="h-8 w-8" />
                </div>
                <p className="text-slate-700 font-bold text-lg mb-2">לחץ או גרור תמונה לכאן</p>
                <p className="text-slate-500 text-sm">JPG, PNG, WEBP (עד 5MB)</p>
              </>
            )}
          </div>

          {error && (
            <div className="mt-6 w-full rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-center text-red-500 font-medium">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-6 w-full rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-center flex items-center justify-center gap-2 text-emerald-600 font-medium">
              <CheckCircle2 className="h-5 w-5" />
              התמונה הועלתה בהצלחה! היא כבר מופיעה בדף הראשי.
            </div>
          )}

          <button 
            onClick={handleUpload}
            disabled={!file || uploading}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-bold text-white transition hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {uploading ? <Loader2 className="h-5 w-5 animate-spin" /> : <UploadCloud className="h-5 w-5" />}
            {uploading ? "מעלה תמונה..." : "שמור תמונה"}
          </button>
        </div>
      </div>
    </div>
  );
}
