import ACTIONS from "./actions";

export const ChatReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_CHAT_DATA:
      return {
        ...state,
        conversations: action.payload.conversations,
        isReady: true,
        newConversation: false,
      };
    case ACTIONS.SET_APPEND_MESSAGE:
      const newMessage = action.payload.message; // Assuming this is correctly structured

      if (state.conversations.id === action.payload.id) {
        return {
          ...state,
          conversations: {
            ...state.conversations,
            discussions: [...state.conversations.discussions, newMessage],
          },
          newMessage: "",
        };
      }
      return state;
    case ACTIONS.SET_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.payload,
      };
    case ACTIONS.SET_NEW_CONVERSATION:
      return {
        ...state,
        newConversation: true,
        conversations: [...state.conversations],
      };
    case ACTIONS.SET_TYPING:
      return {
        ...state,
        typing: action.payload,
      };
    default:
      return state;
  }
};
