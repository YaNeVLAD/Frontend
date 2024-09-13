type Presentation = {
    title: string,
    slides: Array<Slide>
    selection: GlobalSelection
}

type GlobalSelection = {
    SelectedSlidesIds: Array<string>,
    SelectedObjectsIds: Array<string>,
}

type Slide = {
    id: string,
    objects: Array<SlideObject>,
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

type Background = {
    type: 'solid' | 'gradient' | 'image',
}

type SlideObject = {
    id: string,

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
    src: string,
}

type TextArea = SlideObject & {
    value: string,
    font: string,
    color: string
    textSize: number,
}

// type TextArea = SlideObject & {
//     width: number,
//     height: number,

//     value: string,
//     font: string,
//     textScale: number,
//     textColor: string,
// }

export { Presentation, Slide, GlobalSelection, Background, SlideObject, TextArea, Image, ImageSrc, SolidColor, GradientColor }