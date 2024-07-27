import { defineStore } from 'pinia'
import api from '~/composables/api'

export const useFileStore = defineStore('file', () => {
  interface UploadedImage {
    data: {
      id: number
      url: string
    }
  }

  const upload = async (file: any) => {
    
    const formData = new FormData()

    formData.append('image', file)

    const res = await api('storage/image/store', {
        method: 'POST',
        body: formData
    })

    return res?.data
  }

  const uploadFile = async (file: any) => {
    
    const formData = new FormData()

    formData.append('title', 'File')
    formData.append('file', file)

    const res = await api('storage/file/store', {
        method: 'POST',
        body: formData
    })

    return res?.data
  }

  return {
    upload,
    uploadFile
  }
})
