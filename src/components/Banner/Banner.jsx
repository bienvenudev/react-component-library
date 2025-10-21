import { IoCheckmarkCircle } from "react-icons/io5";
import { FaTriangleExclamation } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { BsFillInfoSquareFill } from "react-icons/bs";

export default function Banner({
  title,
  text,
  status = "neutral",
  onDismiss,
  action,
}) {
  const defaultIcon =
    status === "success" ? (
      <IoCheckmarkCircle className="text-[#34D399]" />
    ) : status === "warning" ? (
      <FaTriangleExclamation className="text-[#FBBF24]" />
    ) : status === "error" ? (
      <IoMdCloseCircle className="text-[#F87171]" />
    ) : (
      <BsFillInfoSquareFill className="text-[#60A5FA]" />
    );

  const statusClasses =
    status === "success"
      ? "bg-[#ECFDF5] text-[#065F46]"
      : status === "warning"
      ? "bg-[#FFFBEB] text-[#92400E]"
      : status === "error"
      ? "bg-[#FEF2F2] text-[#92400E]"
      : "bg-[#EFF6FF] text-[#1E40AF]";

  const statusTextClasses =
    status === "success"
      ? "text-[#047857]"
      : status === "warning"
      ? "text-[#B45309]"
      : status === "error"
      ? "text-[#B91C1C]"
      : "text-[#1C51B9]";

  return (
    <div
      className={`p-4 ${statusClasses} rounded-md grid grid-cols-[auto_1fr_auto] ${
        text ? "items-baseline" : "items-center"
      } gap-3`}
    >
      <div>{defaultIcon}</div>

      <div>
        {!text && status === "error" ? (
          <div className="font-bold">{title}</div>
        ) : (
          <div>{title}</div>
        )}
        <div>
          {text && (
            <div className={`mt-2 font-normal ${statusTextClasses}`}>
              {text}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-start gap-3">
        {action && (
          <button
            onClick={action.onClick}
            className={`text-sm font-medium ${statusTextClasses}`}
            aria-label={action.ariaLabel}
          >
            {action.label}
          </button>
        )}

        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Dismiss banner"
          >
            <IoMdCloseCircle className="w-6 h-6 text-xl" />
          </button>
        )}
      </div>
    </div>
  );
}
