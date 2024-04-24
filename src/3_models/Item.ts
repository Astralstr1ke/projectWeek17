export interface Item{
    id: number;
    image: string;
    title: string;
    artist: String;
    artTitle: String;
    description:string;
    category: Enumerator;
    startPrice:number;
    currentPrice:number;
    expiryDate:Date;
    timeLeft:Date;
    active: Boolean
    winner:string;
};

  