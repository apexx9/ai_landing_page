'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

{/* Definitions imports */}
import type { PageProgressBarProps } from "@/libs/definitions"; //Interface
import type { makeReadonly } from "@/libs/definitions"; //Type/Interface modifier

///use herof the project

type readonlyProps = makeReadonly<PageProgressBarProps>;


const PageProgressBar: React.FC<readonlyProps> = ({
  currentPage,
  totalPages,
  onClick,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    {/* Update state(progress) whenever page changes */}
      setProgress((currentPage / totalPages) * 100)
    },
    [currentPage,totalPages]
  )
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2 text-sm text-gray-600">
        <span>Page {currentPage}</span>
        <span>{totalPages} pages</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      {onClick && (
        <div className="flex justify-between mt-2">
          <button
            onClick={() => onClick(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            className="text-sm text-blue-500 disabled:text-gray-400"
          >
            Previous {currentPage - 1}
          </button>
          <button
            onClick={() => onClick(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage >= totalPages}
            className="text-sm text-blue-500 disabled:text-gray-400"
          >
            Next {currentPage + 1}
          </button>
        </div>
      )}
    </div>
  );
};

export default PageProgressBar;