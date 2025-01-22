import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import { useCopyToClipboard } from 'react-use';

function CodeBlockDemo({ code, language }) {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = () => {
    copyToClipboard(code);
  };

  return (
    <div className="relative">
      <CopyBlock
        text={code}
        language={language}
        showLineNumbers={true}
        theme={dracula}
        codeBlock
      />
      <button
        className="bg-white rounded-full px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
        onClick={copyCode}
      >
        {state.value ? 'Copied!' : 'Copy code'}
      </button>
    </div>
  );
}

export default CodeBlockDemo;
