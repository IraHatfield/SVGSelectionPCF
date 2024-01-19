

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    svg: ComponentFramework.PropertyTypes.StringProperty;
    useFill: ComponentFramework.PropertyTypes.StringProperty;
    fill: ComponentFramework.PropertyTypes.StringProperty;
    fillSelected: ComponentFramework.PropertyTypes.StringProperty;
    svgWidth: ComponentFramework.PropertyTypes.WholeNumberProperty;
    svgHeight: ComponentFramework.PropertyTypes.WholeNumberProperty;
    selectedID: ComponentFramework.PropertyTypes.StringProperty;
    calloutID: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    selectedID?: string;
    calloutID?: string;
}
