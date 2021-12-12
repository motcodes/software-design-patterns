import { ChatUser } from './chatUser';
import { ChatMediator } from './concreteMediatorChat';
import { User } from './user';

export function RunMediator() {
  const chatroom: ChatMediator = new ChatMediator();

  const user1: User = new ChatUser('John', chatroom);
  const user2: User = new ChatUser('Paul', chatroom);
  const user3: User = new ChatUser('Georg', chatroom);
  const user4: User = new ChatUser('Ringo', chatroom);

  chatroom.addUser(user1);
  chatroom.addUser(user2);
  chatroom.addUser(user3);
  chatroom.addUser(user4);

  user1.sendMessage(
    `Everybody had a good time, Everybody had a wet dream, Everybody saw the sunshine`
  );
}
