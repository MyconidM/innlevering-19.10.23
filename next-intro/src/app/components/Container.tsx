import { ReactNode } from "react";

export default function Conteiner({ children }: { children: ReactNode }) {
    // Way to get responses if we do not use children
    // const responses = Array.from(createResponses({ count: 10, faker }).values())
    // const alternative = {
    //   id: "1",
    //   answer: "My answer",
    //   score: 22,
    //   category: "one",
    //   questionId: "123",
    // }
    return (
      <div className="mx-auto mt-4 w-full max-w-4xl">
        <div className="relative mt-4 overflow-x-auto">
          
            {/* The {children} prop is used here to render the content passed as children to this component.
            This allows the component to be flexible and render different sets of responses based on where it is used. */}
            {children}
            {/* Alternative way to render responses if children is not used */}
            {/* {responses.map((response) => (
              <ResponseItem key={response.id} {...response} />
            ))} */}
            {/* <ResponseItem id={alternative.id} score={alternative.score} {...alternative} /> */}
            {/* <ResponseItem {...alternative} /> */}
          
        </div>
      </div>
    )
  }