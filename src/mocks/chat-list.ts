import kittensChat from "../assets/kittens-chat.jpeg";
import birdChat from "../assets/bird.jpeg";

export interface Message {
	id: number;
	fromUserId: number;
	message: string;
	fromUserName: string;
}

export interface Chat {
	id: number;
	logo: string,
	name: string;
	messages: Message[]
}

export const CHAT_LIST: Chat[] = [
	{
		id: 1,
		logo: kittensChat,
		name: 'Kittens support',
		messages: [
			{id: 0, fromUserId: 3, fromUserName: 'Kitten', message: 'What should i do?'},
			{id: 1, fromUserId: 1, fromUserName: 'Dad cat', message: 'Take time to relax.'},
			{id: 2, fromUserId: 2, fromUserName: 'Mom cat', message: 'Leave your fur on all surfaces.'}
		]
	},
	{
		id: 2,
		logo: birdChat,
		name: 'Bird',
		messages: [
			{id: 0, fromUserId: 4, fromUserName: 'Bird', message: 'Hello!'},
			{id: 1, fromUserId: 4, fromUserName: 'Bird', message: 'I\'m here.'},
			{id: 2, fromUserId: 4, fromUserName: 'Bird', message: 'Look at me!'}
		]
	}
]
