export default function initWebSocket(onMessage) {
  const socket = new WebSocket(import.meta.env.VITE_WS_URL);
  socket.onmessage = (e) => {
    const msg = JSON.parse(e.data);
    onMessage(msg);
  };
  return socket;
}
