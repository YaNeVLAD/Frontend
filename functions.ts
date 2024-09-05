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
    let slides: SlideCollection = presentation.slides;
    slides.slidesArray.splice(index, 1);

    return {
        ...presentation,
        slides: slides
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

function moveSlide(slide: Slide, from: number, to: number, presentation: Presentation): Presentation {


    return {
        ...presentation
    }
}

function addObject(slide: Slide, object: SlideObject) {
    let objects = slide.objects;
    objects.push(object);

    return {
        ...slide,
        objects: objects
    }
}

function deleteObject(slide: Slide, object: SlideObject) {
    let objects: Array<SlideObject> = slide.objects;
    let index: number = objects.findIndex((it) => { it == object });

    objects.splice(index, 1);

    return {
        ...slide,
        objects: objects
    }
}

function moveObject(slide: Slide, objectToMove: SlideObject, newX: number, newY: number): Slide {
    let objects: Array<SlideObject> = slide.objects;
    let index = objects.findIndex((it) => { it == objectToMove });

    objects.splice(index, 1);

    objectToMove.x = newX;
    objectToMove.y = newY;

    objects.push(objectToMove);

    return {
        ...slide,
        objects: objects
    }
}

function changeText(object: SlideObject, newText: ObjectText): SlideObject {
    let text: ObjectText | null = object.text

    text = newText

    return {
        ...object,
        text: text
    }
}

export { changePresentationTitle, addSlide, changeSlideBackground, deleteSlide, moveSlide, addObject, deleteObject, moveObject, changeText }