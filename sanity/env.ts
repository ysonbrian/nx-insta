export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-26"

export const dataset = assertValue(
  "nxinsta",
  "Missing environment variable: SANITY_DATASET"
)

export const projectId = assertValue(
  "xyl4iab6",
  "Missing environment variable: SANITY_PROJECT_ID"
)

export const useCdn = false
// export const token = process.env.SANITY_SECRET_TOKEN
export const token =
  "sk0jU8uw01V7r9n3TF1QpKAD57ZbVWYRB3QHl2yjshjpz8IvrV40HTTl76h706GUr9dKD4Kab8HwkjDszW5eKNlEkP4A4hBQ1hidtniUI4B4JlrwIYK0n9jcH5DD97UHWnJkuV56Gvr5lZJ2OT3rUwbcBj1xz5o6Q1bqLeFziCETauVupSq0"

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
