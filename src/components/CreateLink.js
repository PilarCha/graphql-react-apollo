import React, { useState } from "react";

const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: "",
    url: "",
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-column mt3">
          <input>
            className="mb2" value={formState.description}
            onChange={" "}
            {(e) =>
              setFormState({
                ...formState,
                description: e.target.value,
              })
            }
            type="text" placeholder="A description for the link"
          </input>
        </div>
      </form>
    </div>
  );
};
