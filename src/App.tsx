import { useState } from "react";
import type { AppState, Variant } from "./types";
import { parseInput } from "./logic/parseInput";
import { getExtendedTemplate } from "./logic/templates";
import { generateTimeline, generateVariants } from "./logic/timeline";
import Landing from "./components/Landing";
import SplitView from "./components/SplitView";

function App() {
  const [state, setState] = useState<AppState>({
    inputValue: "",
    options: null,
    timelines: null,
    variants: null,
    variant: "safe",
    viewMode: "input",
    error: null,
  });

  const handleSubmit = (input: string) => {
    try {
      const [optionA, optionB] = parseInput(input);

      const templateA = getExtendedTemplate(optionA);
      const templateB = getExtendedTemplate(optionB);

      const timelineA = generateTimeline(templateA, optionA);
      const timelineB = generateTimeline(templateB, optionB);

      const variantsA = generateVariants(templateA, optionA);
      const variantsB = generateVariants(templateB, optionB);

      setState({
        inputValue: input,
        options: [optionA, optionB],
        timelines: { left: timelineA, right: timelineB },
        variants: { left: variantsA, right: variantsB },
        variant: "safe",
        viewMode: "split",
        error: null,
      });
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err instanceof Error ? err.message : "Something went wrong",
      }));
    }
  };

  const handleBack = () => {
    setState((prev) => ({
      ...prev,
      viewMode: "input",
      error: null,
    }));
  };

  const handleVariantChange = (v: Variant) => {
    setState((prev) => ({ ...prev, variant: v }));
  };

  if (state.viewMode === "split" && state.options && state.variants) {
    const activeTimelines = {
      left: state.variants.left[state.variant],
      right: state.variants.right[state.variant],
    };

    return (
      <SplitView
        options={state.options}
        timelines={activeTimelines}
        variant={state.variant}
        onVariantChange={handleVariantChange}
        onBack={handleBack}
      />
    );
  }

  return <Landing onSubmit={handleSubmit} error={state.error} />;
}

export default App;
