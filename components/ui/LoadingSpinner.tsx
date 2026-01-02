import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({ className = "" }: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center p-4 ${className}`}>
      <Loader2 className="animate-spin text-[#ad8f66] h-8 w-8" />
    </div>
  );
}
