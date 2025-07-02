export interface Service {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    icon?: string;
    sampleImages: string[];
}

export interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    feedback: string;
    image: string;
}

export interface Client {
    id: number;
    name: string;
    logo: string;
    description: string;
}

export interface Campaign {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface ContactForm {
    fullName: string;
    email: string;
    phoneNumber: string;
    budget: string;
    message: string;
}