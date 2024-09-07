import { PictureType, type Background, type Presentation, type Slide, type SlideObject, type TextArea } from "./types";

function changePresentationTitle(title: string, presentation: Presentation): Presentation {
    return {
        ...presentation,
        title: title
    }
}

function addSlide(slide: Slide, presentation: Presentation): Presentation {
    let slides: Array<Slide> = presentation.slides;
    slides.push(slide);

    slide.isSelected = true;

    return {
        ...presentation,
        slides: slides
    }
}

function deleteSlide(slide: Slide, presentation: Presentation): Presentation {
    if (slide.isSelected == false) {
        throw new Error('Can\'t delete slide that isn\'t selected');
    }

    let index: number = presentation.slides.indexOf(slide);
    if (index == -1) {
        throw new Error('Slide doesn\'t exist in presentation')
    }

    let slides: Array<Slide> = presentation.slides;
    slides.splice(index, 1);

    return {
        ...presentation,
        slides: slides
    }
}

function moveSlide(slide: Slide, from: number, to: number, presentation: Presentation): Presentation {
    if (slide.isSelected == false) {
        throw new Error('Can\'t move slide that isn\'t selected');
    }

    return {
        ...presentation
    }
}

function changeSlideBackground(slide: Slide, newBackground: Background): Slide {
    if (slide.isSelected == false) {
        throw new Error('Can\'t change background on slide that isn\'t selected');
    }
    
    if (!(newBackground.type in PictureType)) {
        throw new Error('Wrong background type')
    }

    let background = slide.background;

    background = newBackground

    return {
        ...slide,
        background: background
    }
}

function addObject(slide: Slide, object: SlideObject): Slide {
    if (slide.isSelected == false) {
        throw new Error('Can\'t add object on slide that isn\'t selected');
    }

    let objects = slide.objects;
    objects.push(object);

    return {
        ...slide,
        objects: objects
    }
}

function deleteObject(slide: Slide, object: SlideObject): Slide {
    if (slide.isSelected == false) {
        throw new Error('Can\'t delete object on slide that isn\'t selected');
    }

    if (object.isSelected == false) {
        throw new Error('Can\'t delete object that isn\'t selected');
    }

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
    if (objectToMove.isSelected == false) {
        throw new Error('Can\'t move object that isn\'t selected');
    }

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
    if (textToMove.isSelected == false) {
        throw new Error('Can\'t move text area that isn\'t selected');
    }

    return {
        ...textToMove,
        x: newX,
        y: newY
    }
}

function changeTextValue(textArea: TextArea, newValue: string): TextArea {
    if (textArea.isSelected == false) {
        throw new Error('Can\'t change value in text area that isn\'t selected');
    }

    let value = textArea.value
    value = newValue

    return {
        ...textArea,
        value: value
    }
}

function changeTextFont(textArea: TextArea, newFont: string): TextArea {
    if (textArea.isSelected == false) {
        throw new Error('Can\'t change font in text area that isn\'t selected');
    }

    let font = textArea.font
    font = newFont

    return {
        ...textArea,
        font: font
    }
}

function changeTextColor(textArea: TextArea, newColor: string): TextArea {
    if (textArea.isSelected == false) {
        throw new Error('Can\'t change color in text area that isn\'t selected');
    }

    let color = textArea.textColor
    color = newColor

    return {
        ...textArea,
        textColor: color
    }
}

function changeTextScale(textArea: TextArea, newScale: number): TextArea {
    if (textArea.isSelected == false) {
        throw new Error('Can\'t change scale in text area that isn\'t selected');
    }

    let scale = textArea.textScale
    scale = newScale

    return {
        ...textArea,
        textScale: scale
    }
}

export {
    changePresentationTitle, addSlide, deleteSlide, moveSlide,
    addObject, deleteObject, moveObject, changeSlideBackground,
    moveText, changeTextValue, changeTextFont, changeTextScale, changeTextColor
}