class Graph {
  constructor(points = [], segments = []) {
    this.points = points;
    this.segments = segments;
  }

  dispose() {
    this.points.length = 0;
    this.segments.length = 0;
  }

  removePoint(point) {
    const segs = this.getSegmentsWithPoint(point);
    for (const seg of segs) {
      this.removeSegment(seg);
    }
    this.points.splice(this.points.indexOf(point), 1);
  }

  getSegmentsWithPoint(point) {
    const segs = [];
    for (const seg of this.segments) {
      if (seg.includes(point)) {
        segs.push(seg);
      }
    }

    return segs;
  }

  removeSegment(segment) {
    this.segments.splice(this.segments.indexOf(segment), 1);
  }

  tryAddPoint(point) {
    if (!this.containsPoint(point)) {
      this.addPoint(point);
      return true;
    }
    return false;
  }

  tryAddSegment(segment) {
    if (!this.containsSegment(segment)) {
      this.segments.push(segment);
      return true;
    }

    return false;
  }

  addSegment(segment) {
    this.segments.push(segment);
  }

  addPoint(point) {
    this.points.push(point);
  }

  containsSegment(segment) {
    return this.segments.find(s => s.equals(segment))
  }

  containsPoint(point) {
    return this.points.find(p => p.equals(point));
  }

  draw(ctx) {
    for (const seg of this.segments) {
      seg.draw(ctx);
    }

    for (const point of this.points) {
      point.draw(ctx);
    }
  }
}