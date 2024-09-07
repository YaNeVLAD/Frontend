type Presentation = {
    title: string,
    slides: Array<Slide>
}

type Slide = {
    id: number,
    objects: Array<SlideObject>,
    background: Background,
    isSelected: boolean
}

enum PictureType {
    link = 'P',
    filled = 'F',
    gradient = 'G'
}

type Background = {
    type: PictureType,
    payload: string
}

//!ГОТОВО! В background нужно избавиться от строки
//!ГОТОВО! Убрать дублирование выделения

type SlideObject = {
    id: number,

    x: number,
    y: number,

    color: string | null,
    turnAngle: number,
    isSelected: boolean
}

type Rectangle = SlideObject & {
    width: number,
    height: number,
}

type Picture = SlideObject & Rectangle & {
    background: Background
}

type TextArea = SlideObject & {
    width: number,
    height: number,

    value: string,
    font: string,
    textScale: number,
    textColor: string,
}

export { Presentation, Slide, Background, PictureType, SlideObject, Picture, TextArea }