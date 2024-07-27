import axiosInstance from './axiosConfig';

export const useGetVideos = async () => {
    try {
        const response = await axiosInstance.get(`/videos`)
        return response.data
    } catch (error) {
        console.error('GetVideos Error:', error);
    }
}

export const useGetVideoById = async (id) => {
    try {
        const response = await axiosInstance.get(`/videos/${id}`)
        return response.data
    } catch (error) {
        console.error('GetVideoById Error:', error);
    }
}

export const usePostComment = async (id, comment) => {
    try {
        const response = await axiosInstance.post(`/videos/${id}/comments`,comment)
        return response.data
    } catch (error) {
        console.error('PostComment Error:', error);
    }
}
export const usePostVideo = async (video) => {
    try {
        const response = await axiosInstance.post(`/videos/`,video)
        return response.data
    } catch (error) {
        console.error('PostVideo Error:', error);
    }
}
