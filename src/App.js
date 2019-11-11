import React from "react";
import "./App.css";
import RichTextEditor from "./RichTextEditor";
import { hashCode } from "./utils";

const data1 = `{"blocks":[{"key":"5ahok","text":"this is demo","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"30l8d","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8ch67","text":"import React from 'react';","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"455hj","text":"export default class App extends React.component {","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"90q02","text":"  render() {","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c6058","text":"    return <div> Test </div>","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"9kgvh","text":"  }","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"5ive4","text":"}","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"23vge","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"a5od7","text":"please let me know.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { questionData: "" };
		this.editorRef = React.createRef();
	}

	onSubmit = () => {
		console.log(JSON.stringify(this.editorRef.current.getData()));
	};

	onUpdate = () => {
		this.setState({
			questionData: data1
		})
	};

	render() {
		const { questionData } = this.state;

		return (
			<div className="RichEditor-root">
				<RichTextEditor
					defaultValue={questionData}
					key={hashCode(questionData)}
					ref={this.editorRef}
				/>
				<div>
					<button onClick={this.onSubmit}>Submit</button>
					<button onClick={this.onUpdate}>Update Data</button>
				</div>
			</div>
		);
	}
}

export default App;
