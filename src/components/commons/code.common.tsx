"use client"

import { PrismAsyncLight as SyntaxHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";

export default function Code(props: SyntaxHighlighterProps) {
    return (
      <SyntaxHighlighter
        { ...props }
      >
        {props?.children}
      </SyntaxHighlighter>
    );
  }