import type { Presentation, Slide, SlideCollection, SlideObject, ObjectText } from "./types";

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

    objectToMove.text.x = newX;
    objectToMove.text.y = newY;

    // Recalculate width and height

    objects.push(objectToMove);

    return {
        ...slide,
        objects: objects
    }
}

function moveText(textToMove: ObjectText, newX: number, newY: number): ObjectText {
    return {
        ...textToMove,
        x: newX,
        y: newY
    }
}

function changeTextValue(object: SlideObject, newValue: string): SlideObject {
    let text = object.text
    text.value = newValue

    return {
        ...object,
        text: text
    }
}

function changeTextFont(object: SlideObject, newFont: string): SlideObject {
    let text = object.text
    text.font = newFont

    return {
        ...object,
        text: text
    }
}

function changeTextColor(object: SlideObject, newColor: string): SlideObject {
    let text = object.text
    text.color = newColor

    return {
        ...object,
        text: text
    }
}

function changeTextScale(object: SlideObject, newScale: number): SlideObject {
    let text = object.text
    text.scale = newScale

    return {
        ...object,
        text: text
    }
}

export {
    changePresentationTitle, addSlide, deleteSlide, moveSlide,
    addObject, deleteObject, moveObject, changeSlideBackground,
    moveText, changeTextValue, changeTextFont, changeTextScale, changeTextColor
}