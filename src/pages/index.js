import Layout from "@/Layout/Layout"
import Image from "next/image"
import { useEffect, useState } from "react"
import axiosInstance from "@/utils/axios.instance"
import { nanoid } from "nanoid"
import Categories from "@/components/home/categories"



export default function Home() {




  const [newCategory, setNewCategory] = useState({ categoryName: "", images: [] })

  const onChangeImage = (e) => {

    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {

        const newImage = {
          src: e.target.result,
          file: selectedFile,
          priority: newCategory.images.length + 1
        }

        setNewCategory({ ...newCategory, images: [...newCategory.images, newImage] })
      };

      reader.readAsDataURL(selectedFile);
    }
  }

  const nameCHange = (e) => setNewCategory({ ...newCategory, categoryName: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault();
    const apiData = new FormData()

    for (const [key, value] of Object.entries(newCategory)) {
      if (key === "images") {
        value.forEach(image => {
          const id = nanoid();
          function generateNanoidRegex(value) {
            const escapedValue = value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special characters
            const nanoidRegexPattern = `^${escapedValue}-[a-zA-Z0-9_-]{21}$`;
            return new RegExp(nanoidRegexPattern);
          }
          generateNanoidRegex("categoryImage")


          apiData.append(`categoryImage-${id}`, image.file)
          apiData.append(`priority-${id}`, image.priority)

        })
      }
      else {
        apiData.append(key, value)
      }
    }

    try {
      const { data } = await axiosInstance.post("/categories/add", apiData)

      setNewCategory({ categoryName: "", images: [] })
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <Layout>



      <Categories />



      <form action="" onSubmit={onSubmit}>
        <input type="text" name="" id="" placeholder="Category Name" onChange={nameCHange} />
        <input type="file" name="" id="" onChange={onChangeImage} />
        <button type="submit">Submit</button>

      </form>
    </Layout>
  )
}
