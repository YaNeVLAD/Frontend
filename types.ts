type Presentation = {
    title: string,
    slides: Array<Slide>
}

type Slide = {
    id: number,
    objects: Array<SlideObject>,
    background: string,
    isSelected: boolean
}

type PresentationSelection = {
    slides: Array<Slide>,
    objects: Array<SlideObject>
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

export { Presentation, Slide, PresentationSelection, SlideObject, Rectangle, Circle, TextArea }