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
    width: number,
    height: number
    color: string | null,
    scale: number,
    turnAngle: number,
    text: ObjectText | null
}

type ObjectText = {
    text: string,
    scale: number,
    color: string,
    font: string
}

export { Presentation, Slide, OverallSelection, SlideCollection, SlideObject, ObjectText }