import { 
    changePresentationTitle, addSlide, deleteSlide, moveSlide, 
    addObject, deleteObject, moveObject, changeSlideBackground, 
    changeTextValue, changeTextFont, changeTextScale, changeTextColor, 
    selectSlide,
    selectObject
} from './functions';

import { Presentation, Slide, Image, TextArea, SolidColor, GradientColor, ImageSrc } from './types';

// Полные данные
const fullPresentation: Presentation = {
    title: 'Project Presentation',
    slides: [
        { id: 'slide1', objects: [], background: { color: 'red', type: 'solid' } as SolidColor },
        { id: 'slide2', objects: [], background: { color: 'blue', type: 'gradient' } as GradientColor },
        { id: 'slide3', objects: [], background: { src: 'image1.png', type: 'image' } as ImageSrc },
    ],
    selection: {
        SelectedSlidesIds: ['slide1'],
        SelectedObjectsIds: ['object1'],
    },
};

const fullImage: Image = {
    id: 'object1',
    type: 'imageObj',
    pos: { x: 50, y: 50 },
    size: { width: 200, height: 200 },
    turnAngle: 45,
    src: { src: 'image1.png', type: 'image' },
};

const fullTextArea: TextArea = {
    id: 'object2',
    type: 'textObj',
    pos: { x: 100, y: 150 },
    size: { width: 300, height: 100 },
    turnAngle: 0,
    value: 'Hello World',
    font: 'Arial',
    color: 'black',
    textSize: 16,
};

// Обновленные тесты

console.log("1. Изменение заголовка презентации");
const updatedTitlePresentation = changePresentationTitle('Updated Project Presentation', fullPresentation);
console.log(updatedTitlePresentation.title); // Должен вывести новый заголовок

console.log("2. Добавление нового слайда");
const newSlide: Slide = {
    id: 'slide4',
    objects: [],
    background: { color: 'yellow', type: 'solid' } as SolidColor,
};

const presentationWithNewSlide = addSlide(newSlide, fullPresentation);
console.log(presentationWithNewSlide.slides); // Должен содержать новый слайд

console.log("3. Выделение слайда");
fullPresentation.selection = selectSlide(fullPresentation.selection, fullPresentation.slides[0].id)
console.log(fullPresentation.selection.SelectedSlidesIds); // Выделен слайд 'slide1'

console.log("4. Выделение объекта");
fullPresentation.selection = selectObject(fullPresentation.selection, fullPresentation.slides[0].id, fullImage.id)
console.log(fullPresentation.selection.SelectedObjectsIds); // Выделен объект 'object1'

console.log("5. Добавление объекта на слайд");
const presentationWithNewObject = addObject(fullPresentation.slides[0], fullImage, fullPresentation.selection);
console.log(presentationWithNewObject.objects); // Должен содержать новый объект

console.log("6. Перемещение объекта");
fullPresentation.selection = selectObject(fullPresentation.selection, fullPresentation.slides[0].id, fullImage.id)
const fullMovedObject = moveObject(fullPresentation.slides[0], fullImage, 300, 400, fullPresentation.selection);
console.log(fullMovedObject);

console.log("7. Изменение фона");
const fullUpdatedSlideBackground = changeSlideBackground(fullPresentation.slides[0], { color: 'green', type: 'solid' }, fullPresentation.selection);
console.log(fullUpdatedSlideBackground);

console.log("8. Изменение текста");
fullPresentation.selection = selectObject(fullPresentation.selection, fullPresentation.slides[0].id, fullTextArea.id)
const updatedFullText = changeTextValue(fullTextArea, 'Updated Text', fullPresentation.selection);
console.log(updatedFullText);

console.log("9. Изменение шрифта текста");
const updatedFullFont = changeTextFont(fullTextArea, 'Times New Roman', fullPresentation.selection);
console.log(updatedFullFont);

console.log("10. Изменение цвета текста");
const updatedFullColor = changeTextColor(fullTextArea, 'blue', fullPresentation.selection);
console.log(updatedFullColor);

console.log("11. Изменение размера теста");
const updatedFullTextSize = changeTextScale(fullTextArea, 32, fullPresentation.selection);
console.log(updatedFullTextSize);

console.log("12. Удаление объекта");
fullPresentation.selection = selectObject(fullPresentation.selection, fullPresentation.slides[0].id, fullImage.id)
const fullSlideAfterObjectDeletion = deleteObject(fullPresentation.slides[0], fullImage, fullPresentation.selection);
console.log(fullSlideAfterObjectDeletion);

console.log("13. Удаление слайда");
const fullPresentationAfterSlideDeletion = deleteSlide(fullPresentation.slides[0], fullPresentation);
console.log(fullPresentationAfterSlideDeletion);

console.log("14. Перемещение слайда");
fullPresentation.selection.SelectedSlidesIds = [fullPresentation.slides[0].id]; // Выделяем слайд
const fullMovedSlide = moveSlide(fullPresentation.slides[0], fullPresentation.slides[1], fullPresentation);
console.log(fullMovedSlide);