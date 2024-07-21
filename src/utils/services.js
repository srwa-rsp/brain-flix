import axiosInstance from './axiosConfig';

const api_key = '370bac3f-411a-4630-8df1-3f247b91009c'

export const useGetVideos = async () => {
    try {
        const response = await axiosInstance.get(`/videos?api_key=${api_key}`)
        return response.data
    } catch (error) {
        console.error('GetVideos Error:', error);
    }
}

export const useGetVideoById = async (id) => {
    try {
        const response = await axiosInstance.get(`/videos/${id}?api_key=${api_key}`)
        return response.data
    } catch (error) {
        console.error('GetVideoById Error:', error);
    }
}

export const usePostComment = async (id, comment) => {
    try {
        const response = await axiosInstance.post(`/videos/${id}/comments?api_key=${api_key}`,comment)
        return response.data
    } catch (error) {
        console.error('PostComment Error:', error);
    }
}
