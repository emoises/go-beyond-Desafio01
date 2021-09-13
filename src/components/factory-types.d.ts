interface SliderImagesProps {
    images: Array<string>;
    primaryText?: Array<string>;
    secondaryText?: Array<string>;
}

interface SliderProps {
    data: SliderObjectProps[];
}

interface SliderObjectProps{
    id: string;
    name: string;
    imageUrl: string;
    description: {
        primaryMessage: string;
        secondaryMessage: string;
    };
}