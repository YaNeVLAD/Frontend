type Presentation = {
    title: string,
    slides: SlideCollection
}

type Slide = {
    id: number,
    objects: Array<SlideObject>,
    background: string,
    isSelected: boolean
}

type SlideCollection = {
    slidesArray: Array<Slide>
}

type OverallSelection = {
    slides: SlideSelection,
    objects: ObjectSelection
}

type SlideSelection = {
    selected: Array<Slide>
}

type ObjectSelection = {
    selected: Array<SlideObject>
}

type SlideObject = {
    id: number,

    x: number,
    y: number,

    color: string | null,
    scale: number,
    turnAngle: number,
    isSelected: boolean
}

type Rectangle = SlideObject & {
    width: number,
    height: number,
}

type Circle = SlideObject & {
    radius: number
}

type TextArea = SlideObject & {
    width: number,
    height: number,

    value: string,
    font: string,
    textScale: number,
    textColor: string,
}

export { Presentation, Slide, OverallSelection, SlideCollection, ObjectSelection, SlideObject, Rectangle, Circle, TextArea }