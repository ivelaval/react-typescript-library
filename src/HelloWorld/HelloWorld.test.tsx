import React from "react";
import { shallow } from "enzyme";

import HelloWorld from "./HelloWorld";

describe("Hello world Component", () => {
  let props: any;

  beforeEach(() => {
    props = {
      text: "primary"
    };
  });

  const renderWrapper = () => shallow(<HelloWorld {...props} />);

  describe("Snapshots", () => {
    it("should match snapshots with primary text", () => {
      expect(renderWrapper()).toMatchSnapshot();
    });

    it("should match snapshots with secondary text", () => {
      props.text = "secondary";
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
