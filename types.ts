type Presentation = {
    title: string,
    slides: Array<Slide>
    selection: GlobalSelection,
}
//Решить можно ли будет выделять объекты на слайде, когда выделено несколько слайдов
type GlobalSelection = {
    SelectedSlidesIds: Array<string>,
    SelectedObjectsIds: Array<string>,
}

type Slide = {
    id: string,
    objects: Array<Image | TextArea>,
    background: SolidColor | GradientColor | ImageSrc,
}

type SolidColor = {
    color: string,
    type: 'solid',
}   

type GradientColor = {
    color: string,
    type: 'gradient',
}

type ImageSrc = {
    src: string,
    type: 'image',
}

type SlideObject = {
    id: string,
    type: 'imageObj' | 'textObj'

    pos: {
        x: number,
        y: number,
    },
    size: {
        width: number,
        height: number,
    },
    turnAngle: number,
}

type Image = SlideObject & {
    type: 'imageObj',
    src: ImageSrc,
}

type TextArea = SlideObject & {
    type: 'textObj',
    value: string,
    font: string,
    color: string
    textSize: number,
}

export { Presentation, Slide, GlobalSelection, SlideObject, TextArea, Image, ImageSrc, SolidColor, GradientColor }