import * as CR from 'typings'
import * as G from 'typings/graphql'

// localStorage

class Storage<T> {
	private key: string
	// TODO: replace somehow with localStorage
	// window.localStorage not working inside of vscode
	private storage = {
		getItem(key: string) {
			return null
		},
		setItem(key: string, value: string) {
			return
		}
	}
	constructor(key: string) {
		this.key = key
	}
	public get = async (): Promise<T | null> => {
		const value = await this.storage.getItem(this.key)
		if (value) {
			return JSON.parse(value)
		}
		return null
	}
	public set = (value: T): void => {
		const stringValue = JSON.stringify(value)
		this.storage.setItem(this.key, stringValue)
	}
}

export const tutorial = new Storage<G.Tutorial | null>('coderoad:tutorial')
export const position = new Storage<CR.Position>('coderoad:position')
export const progress = new Storage<CR.Progress>('coderoad:progress')
