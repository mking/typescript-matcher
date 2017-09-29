export interface IEvent {
    name: string;
}

export default class Analytics {
    public log(event: IEvent) {
        return `logging ${event.name} with key ${MIXPANEL_API_KEY}`;
    }
}
