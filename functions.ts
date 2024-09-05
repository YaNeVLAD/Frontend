import type { Presentation, Slide, SlideCollection, SlideObject, TextArea } from "./types";

function changePresentationTitle(title: string, presentation: Presentation): Presentation {
    return {
        ...presentation,
        title: title
    }
}

function addSlide(slide: Slide, presentation: Presentation): Presentation {
    let slides: SlideCollection = presentation.slides;
    slides.slidesArray.push(slide);

    return {
        ...presentation,
        slides: slides
    }
}

function deleteSlide(slide: Slide, presentation: Presentation): Presentation {
    let index: number = presentation.slides.slidesArray.indexOf(slide);

    if (index == -1) {
        throw new Error('Slide doesn\'t exist in presentation')
    }

    let slides: SlideCollection = presentation.slides;
    slides.slidesArray.splice(index, 1);

    return {
        ...presentation,
        slides: slides
    }
}

function moveSlide(slide: Slide, from: number, to: number, presentation: Presentation): Presentation {

    return {
        ...presentation
    }
}

function changeSlideBackground(slide: Slide, newBackground: string): Slide {
    let background = slide.background;

    background = newBackground

    return {
        ...slide,
        background: background
    }
}

function addObject(slide: Slide, object: SlideObject): Slide {
    let objects = slide.objects;
    objects.push(object);

    return {
        ...slide,
        objects: objects
    }
}

function deleteObject(slide: Slide, object: SlideObject): Slide {
    let objects: Array<SlideObject> = slide.objects;
    let index: number = objects.findIndex((it) => { it == object });

    if (index == -1) {
        throw new Error('Object doen\'t exist on this slide');
    }

    objects.splice(index, 1);

    return {
        ...slide,
        objects: objects
    }
}

function moveObject(slide: Slide, objectToMove: SlideObject, newX: number, newY: number): Slide {
    let objects: Array<SlideObject> = slide.objects;
    let index = objects.findIndex((it) => { it == objectToMove });

    if (index == -1) {
        throw new Error('Object doen\'t exist on this slide');
    }

    objects.splice(index, 1);

    objectToMove.x = newX;
    objectToMove.y = newY;

    objects.push(objectToMove);

    return {
        ...slide,
        objects: objects
    }
}

function moveText(textToMove: TextArea, newX: number, newY: number): TextArea {
    return {
        ...textToMove,
        x: newX,
        y: newY
    }
}

function changeTextValue(textArea: TextArea, newValue: string): TextArea {
    let value = textArea.value
    value = newValue

    return {
        ...textArea,
        value: value
    }
}

function changeTextFont(textArea: TextArea, newFont: string): TextArea {
    let font = textArea.font
    font = newFont

    return {
        ...textArea,
        font: font
    }
}

function changeTextColor(textArea: TextArea, newColor: string): TextArea {
    let color = textArea.color
    color = newColor

    return {
        ...textArea,
        color: color
    }
}

function changeTextScale(textArea: TextArea, newScale: number): TextArea {
    let scale = textArea.scale
    scale = newScale

    return {
        ...textArea,
        scale: scale
    }
}

export {
    changePresentationTitle, addSlide, deleteSlide, moveSlide,
    addObject, deleteObject, moveObject, changeSlideBackground,
    moveText, changeTextValue, changeTextFont, changeTextScale, changeTextColor
}