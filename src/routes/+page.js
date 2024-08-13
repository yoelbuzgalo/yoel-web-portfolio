import timelineData from '$lib/timeline.json'

export const load = async () => {
    return {
        timeline: timelineData
    }
}