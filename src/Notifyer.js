const Notifyer = {
  async init() {
    const permission = await Notification.requestPermission();
    
    if (permission !== "granted") {
      throw new Error('Permission Denied');
    }
  },
  notify({ title, body, icon}) {
    new Notification(title, {
      body,
      icon
    })
  }
};

export { Notifyer };