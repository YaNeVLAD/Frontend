"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePresentationTitle = changePresentationTitle;
exports.addSlide = addSlide;
exports.deleteSlide = deleteSlide;
exports.moveSlide = moveSlide;
exports.addObject = addObject;
exports.deleteObject = deleteObject;
exports.moveObject = moveObject;
exports.changeSlideBackground = changeSlideBackground;
exports.changeTextValue = changeTextValue;
exports.changeTextFont = changeTextFont;
exports.changeTextScale = changeTextScale;
exports.changeTextColor = changeTextColor;
exports.selectObject = selectObject;
exports.selectSlide = selectSlide;
function changePresentationTitle(title, presentation) {
    return __assign(__assign({}, presentation), { title: title });
}
function addSlide(slide, presentation) {
    var slides = presentation.slides;
    slides.push(slide);
    return __assign(__assign({}, presentation), { selection: {
            SelectedSlidesIds: [slide.id],
            SelectedObjectsIds: [],
        }, slides: slides });
}
function deleteSlide(slide, presentation) {
    if (presentation.selection.SelectedSlidesIds.indexOf(slide.id) == -1) {
        throw new Error('Can\'t delete slide that isn\'t selected');
    }
    var index = presentation.slides.indexOf(slide);
    if (index == -1) {
        throw new Error('Can\'t delete slide that isn\'t in presentation');
    }
    var modifiedSlides = presentation.slides;
    modifiedSlides.splice(index, 1);
    var modifiedSelection = presentation.selection;
    modifiedSelection.SelectedSlidesIds.splice(index, 1);
    return __assign(__assign({}, presentation), { slides: modifiedSlides, selection: modifiedSelection });
}
function moveSlide(slideFrom, slideTo, presentation) {
    if (presentation.selection.SelectedSlidesIds.indexOf(slideFrom.id) == -1) {
        throw new Error('Can\'t move slide that isn\'t selected');
    }
    var slides = presentation.slides;
    var tmp = slideTo;
    slideTo = slideFrom;
    slideFrom = tmp;
    return __assign(__assign({}, presentation), { slides: slides });
}
function changeSlideBackground(slide, newBackground, selection) {
    if (selection.SelectedSlidesIds.indexOf(slide.id) == -1) {
        throw new Error('Can\'t change background of slide that isn\'t selected');
    }
    return __assign(__assign({}, slide), { background: newBackground });
}
function addObject(slide, object, selection) {
    if (selection.SelectedSlidesIds.indexOf(slide.id) == -1) {
        throw new Error('Can\'t change add objects on slide that isn\'t selected');
    }
    var modifiedObjects = slide.objects;
    modifiedObjects.push(object);
    return __assign(__assign({}, slide), { objects: modifiedObjects });
}
function deleteObject(slide, object, selection) {
    if (selection.SelectedSlidesIds.indexOf(slide.id) == -1) {
        throw new Error('Can\'t delete object on slide that isn\'t selected');
    }
    if (selection.SelectedObjectsIds.indexOf(object.id) == -1) {
        throw new Error('Can\'t delete object that isn\'t selected');
    }
    var modifiedObjects = slide.objects;
    var index = modifiedObjects.indexOf(object);
    if (index == -1) {
        throw new Error('Object doen\'t exist on this slide');
    }
    modifiedObjects.splice(index, 1);
    return __assign(__assign({}, slide), { objects: modifiedObjects });
}
function moveObject(slide, objectToMove, newX, newY, selection) {
    if (selection.SelectedSlidesIds.indexOf(slide.id) == -1) {
        throw new Error('Can\'t move slide that isn\'t selected');
    }
    var objects = slide.objects;
    var index = objects.indexOf(objectToMove);
    if (index == -1) {
        throw new Error('Object doen\'t exist on this slide');
    }
    objects.splice(index, 1);
    objectToMove.pos.x = newX;
    objectToMove.pos.y = newY;
    objects.push(objectToMove);
    return __assign(__assign({}, slide), { objects: objects });
}
function changeTextValue(textArea, newValue, selection) {
    if (selection.SelectedObjectsIds.indexOf(textArea.id) == -1) {
        throw new Error('Can\'t change text value of area that isn\'t selected');
    }
    return __assign(__assign({}, textArea), { value: newValue });
}
function changeTextFont(textArea, newFont, selection) {
    if (selection.SelectedObjectsIds.indexOf(textArea.id) == -1) {
        throw new Error('Can\'t change text font of area that isn\'t selected');
    }
    return __assign(__assign({}, textArea), { font: newFont });
}
function changeTextColor(textArea, newColor, selection) {
    if (selection.SelectedObjectsIds.indexOf(textArea.id) == -1) {
        throw new Error('Can\'t change text color of area that isn\'t selected');
    }
    return __assign(__assign({}, textArea), { color: newColor });
}
function changeTextScale(textArea, newSize, selection) {
    if (selection.SelectedObjectsIds.indexOf(textArea.id) == -1) {
        throw new Error('Can\'t change text size of area that isn\'t selected');
    }
    return __assign(__assign({}, textArea), { textSize: newSize });
}
function selectObject(selection, slideId, objectId) {
    return __assign(__assign({}, selection), { SelectedSlidesIds: [slideId], SelectedObjectsIds: [objectId] });
}
function selectSlide(selection, slideId) {
    return __assign(__assign({}, selection), { SelectedSlidesIds: [slideId], SelectedObjectsIds: [] });
}
