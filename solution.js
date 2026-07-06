// Build a generic EventBus class in TypeScript with event registration, removal, a

class EventBus {
  constructor() {
    this._handlers = new Map();
  }

  on(event, handler) {
    if (!this._handlers.has(event)) {
      this._handlers.set(event, []);
    }
    this._handlers.get(event).push(handler);
  }

  off(event, handler) {
    const handlers = this._handlers.get(event);
    if (handlers) {
      const idx = handlers.indexOf(handler);
      if (idx !== -1) handlers.splice(idx, 1);
    }
  }

  emit(event, ...args) {
    const handlers = this._handlers.get(event);
    if (handlers) {
      handlers.forEach(h => h(...args));
    }
  }
}

module.exports = { EventBus };
