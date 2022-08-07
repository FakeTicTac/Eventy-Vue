
/**
 * Interface Represents Amount Unit Data To Be Sent To And Received From Backend .
 */
 export interface IEvent {

    id?: string;

    title: string;
    description: string;
    address: string;
    coverImagePath: string;
    startTime: string;

}